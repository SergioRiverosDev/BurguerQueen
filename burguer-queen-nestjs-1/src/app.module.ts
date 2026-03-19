import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CategoriesModule } from './modules/categories/categories.module';
import { OrdersModule } from './modules/orders/orders.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { PopulateModule } from './modules/populate/populate.module';
import { ProductsModule } from './modules/products/products.module';
import { StripeModule } from './modules/stripe/stripe.module';

@Module({
  imports: [
    CategoriesModule,
    OrdersModule,
    AuthModule,
    UsersModule,
    ProductsModule,
    StripeModule,
    PopulateModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
