import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Signal } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserOrderService } from '../../services/user-order.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatIcon,MatBadge],
  templateUrl: './header.html',
  styleUrl: './header.css',
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Header {

  private traslateService = inject(TranslateService); 
  private userOrderService = inject(UserOrderService);
  private router = inject(Router);

  public languages : string[]= ['en','es'];
  public numProductSignal: Signal<number> = this.userOrderService.numProductsSignal;

  goHome(){
  const content = document.querySelector('.app_content') as HTMLElement;
    if (content) {
    content.scrollTo({ top: 0, behavior: 'smooth' });
    }
  this.router.navigate(['/'], { replaceUrl: true });
  }

  changeLenguage(lenguage:string){

    this.traslateService.use(lenguage);

  }

}