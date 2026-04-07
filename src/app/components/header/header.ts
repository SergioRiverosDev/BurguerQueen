import { Component, inject, Signal } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserOrderService } from '../../services/user-order.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatIcon,MatBadge],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  private traslateService = inject(TranslateService); 
  private userOrderService = inject(UserOrderService);

  public languages : string[]= ['en','es'];
  public numProductSignal: Signal<number> = this.userOrderService.numProductsSignal;


  changeLenguage(lenguage:string){

    this.traslateService.use(lenguage);

  }

}