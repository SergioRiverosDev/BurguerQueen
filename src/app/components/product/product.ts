import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject, Signal, signal, WritableSignal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductModel, ProductsExtraOptions } from '../../models/product.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AsyncPipe, Location, NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule} from '@angular/forms'
import { MatCheckbox } from '@angular/material/checkbox';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { ExtraSelectedPipe } from '../../pipes/extra-selected-pipe';
import { CalculateTotalPricePipe } from '../../pipes/calculate-total-price-pipe';
import { UserOrderService } from '../../services/user-order.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product',
  imports: [AsyncPipe, MatCardModule, TranslateModule, MatDivider, NgClass, MatCardModule, FormsModule, MatCheckbox, MatRadioModule, ExtraSelectedPipe, CalculateTotalPricePipe],
  templateUrl: './product.html',
  styleUrl: './product.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class Product {

  private productService = inject(ProductService);
  private activatedRoute = inject(ActivatedRoute);
  private location: Location = inject(Location);
  private userOrderService = inject(UserOrderService);
  private router = inject(Router);
  private translateServise = inject(TranslateService);
  private _snackBar = inject(MatSnackBar);

  public quantitySiganl: WritableSignal<number> = signal(1);

  public product$: Observable<ProductModel> = new Observable<ProductModel>();

  ngOnInit(){
    this.activatedRoute.params.subscribe({
      next:(params: Params)=> {
        const id = params['id']
        this.product$ = this.productService.getProduct(id)
      },
    })
  }

  addProduct(product:ProductModel){
    console.log(product)
    this.userOrderService.addProduct(product, this.quantitySiganl());
    console.log(this.userOrderService.productsSignals());
    this._snackBar.open(
        this.translateServise.instant('label.add.product.success'),
        this.translateServise.instant('label.ok'),
        {
          horizontalPosition:'center',
          verticalPosition: 'bottom',
          duration:5000
        }
     );
        this.router.navigate(['/'], { fragment: 'categories' });

  }

  goBack(){
    this.location.back();
    
  } 

  oneLessProduct(){
    this.quantitySiganl.update((value)=>value - 1);
  }

  oneMoreProduct(){
    this.quantitySiganl.update((value)=> value + 1);
  }

  changeOption(options: ProductsExtraOptions[],change:MatRadioChange){
    options.forEach(option => option.activate = false);
    change.value.activate = true;
  }

}
