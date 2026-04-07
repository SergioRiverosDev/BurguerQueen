import { ChangeDetectorRef, Component, Inject, inject, ViewChild } from '@angular/core';
import { MatStepLabel, MatStepperModule } from '@angular/material/stepper';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { OrderStatus } from "../order-status/order-status";
import { injectStripe, StripeElementsDirective, StripePaymentElementComponent } from 'ngx-stripe';
import { environment } from '../../../environments/environment.development';
import { StripeElementLocale, StripeElementsOptions, StripePaymentElementOptions } from '@stripe/stripe-js';
import { StripeService } from '../../services/stripe.service';
import { CreatePaymentIntentModel } from '../../models/create-payment-intent.model';
import { UserOrderService } from '../../services/user-order.service';
import { PaymentModel } from '../../models/payment.model';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IOrder } from '../../models/order.model';
import { AuthService } from '../../services/auth.service';
import { first, Subject, switchMap, takeUntil } from 'rxjs';
import { AuthCredentialsModel } from '../../models/auth-credentials.model';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogTicket } from '../dialogs/dialog-ticket/dialog-ticket';

@Component({
  selector: 'app-pay-order',
  imports: [MatStepperModule, TranslateModule, OrderStatus, StripePaymentElementComponent, StripeElementsDirective],
  templateUrl: './pay-order.html',
  styleUrl: './pay-order.css',
})
export class PayOrder {

  @ViewChild(StripePaymentElementComponent)
  paymentElement!: StripePaymentElementComponent

  @ViewChild(StripeElementsDirective)
  formElement!: StripeElementsDirective

  private stripeService = inject(StripeService);
  private authService = inject(AuthService);
  private userOrderService = inject(UserOrderService);
  private translateService = inject(TranslateService);
  private snackbar = inject(MatSnackBar);
  private matDialog = inject(MatDialog);
  private orderService = inject(OrderService);
  private router = inject(Router);

  public stripe = injectStripe(environment.stripe.pubishKey);
  public totalOrderSignal = this.userOrderService.totalOrderSignal;
  private cdr = inject(ChangeDetectorRef);

  private lastTotal: number = 0;
  private unSubscribe$ = new Subject<void>();

  public elementsOptions: StripeElementsOptions = {
    locale: (this.translateService.currentLang || this.translateService.defaultLang) as StripeElementLocale,
    appearance: {
      theme: 'flat',
    }
  };

  public paymentElementOptions: StripePaymentElementOptions = {
    layout: {
      type: 'tabs',
      defaultCollapsed: false,
      radios: false,
      spacedAccordionItems: false
    }
  };

  ngOnInit(){
    this.translateService.onLangChange.pipe(takeUntil(this.unSubscribe$)).subscribe({
      next:(langEvent: LangChangeEvent)=>{
        this.elementsOptions.locale = langEvent.lang as StripeElementLocale;
        if (this.formElement) {
            this.formElement.update(this.elementsOptions)
        }
      }
    })
  }

  createPaymentIntent(event: StepperSelectionEvent) {

    if (event.selectedIndex == 1 && (!this.elementsOptions.clientSecret || this.lastTotal != this.totalOrderSignal())) {

      this.lastTotal = this.totalOrderSignal();
      const amount = this.totalOrderSignal() * 100;
      const paymentIntent: CreatePaymentIntentModel = {
        secretKey: environment.stripe.secretKey,
        amount: +amount.toFixed(0),
        currency: 'EUR',
        customer_id: environment.stripe.customer_id
      }

      this.stripeService.createPaymentSheet(paymentIntent).subscribe({
        next: (paymentIntent: PaymentModel) => {
          this.elementsOptions.clientSecret = paymentIntent.paymentIntentClientSecret;
          this.cdr.detectChanges();
        },
      })

    }

  }

  payOrder() {

    this.stripe
      .confirmPayment({
        elements: this.paymentElement.elements,
        redirect: 'if_required'
      })
      .subscribe(result => {
        if (result.error) {
         this.snackbar.open(
          this.translateService.instant('label.payment.error'),
          this.translateService.instant('label.error'),
          {
            horizontalPosition: 'center',
            verticalPosition:'bottom',
            duration: 5000
          }
         )
        } else {
          // The payment has been processed!
          if (result.paymentIntent.status === 'succeeded') {
          this.snackbar.open(
          this.translateService.instant('label.payment.ok'),
          this.translateService.instant('label.ok'),
          {
            horizontalPosition: 'center',
            verticalPosition:'bottom',
            duration: 5000
          }
         )
         this.createOrder();
          }
        }
      });

  }

  createOrder(){

    const order: IOrder={
      address:'Calle Falsa 123',
      user:{
        email:'test@gmail.com',
        password: '123456'
      },
      products: this.userOrderService.productsSignals()
    }

    this.authService.login(order.user).pipe(
      switchMap((data:AuthCredentialsModel)=> this.orderService.createOrder(order,data.accessToken))
    ).subscribe({
      next:(order:IOrder)=> {
          console.log(order);
          this.userOrderService.resetOrder();
          this.matDialog.open(DialogTicket,{
            data:{
              ticket:order.ticket
            }
          }).afterClosed().pipe(first()).subscribe({
            next:()=> {
              this.router.navigateByUrl('/categories')
            },
          })
      },
    })

  }

  ngOnDestroy(){
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
