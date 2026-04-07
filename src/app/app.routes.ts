import { Routes } from '@angular/router';
import { Categories } from './components/categories/categories';
import { Products } from './components/products/products';
import { Product } from './components/product/product';
import { PayOrder } from './components/pay-order/pay-order';
import { payOrderGuard } from './guards/pay-order-guard';

export const routes: Routes = [
    {path:'categories', component: Categories},
    {path:'products/:categoryId', component: Products},
    {path:'product/:id', component:Product},
    {path:'pay-order', component:PayOrder, canActivate:[payOrderGuard]},
    {path: '**', redirectTo:'categories'}
];
