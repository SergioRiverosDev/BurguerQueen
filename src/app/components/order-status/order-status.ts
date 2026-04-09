import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { UserOrderService } from '../../services/user-order.service';
import { TranslateModule } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';
import { CalculateTotalPricePipe } from '../../pipes/calculate-total-price-pipe';
import { ProductModel } from '../../models/product.model';
import { Router } from '@angular/router';
import { QuantityProductModel } from '../../models/quantity-product.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogExtras } from '../dialogs/dialog-extras/dialog-extras';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-status',
  imports: [TranslateModule, MatTableModule, CalculateTotalPricePipe, CommonModule],
  templateUrl: './order-status.html',
  styleUrl: './order-status.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class OrderStatus {

  private userOrderService = inject(UserOrderService);
  private router = inject(Router);
  private dialog = inject(MatDialog);

  public productsSignal = this.userOrderService.productsSignals;
  public totalOrderSignal = this.userOrderService.totalOrderSignal;
  public displayedColumns: string[] = ['name', 'price', 'quantity', 'total'];

  oneLessProduct(event: MouseEvent,product: ProductModel){
    event.stopPropagation();
    this.userOrderService.oneLessProduct(product);
    if (this.productsSignal().length == 0) {
      this.router.navigateByUrl('/categories');
    }
  }

  oneMoreProduct(event:MouseEvent,product: ProductModel){
    event.stopPropagation();
    this.userOrderService.oneMoserProduct(product);
  }

  showExtras(row: QuantityProductModel){
    console.log(row);
    if (row.product.extras) {

      const extraBlocks = row.product.extras.flatMap((extra) => extra.blocks)
      
      this.dialog.open(DialogExtras,{
        data:{extraBlocks}
      })
    }
  }
}
