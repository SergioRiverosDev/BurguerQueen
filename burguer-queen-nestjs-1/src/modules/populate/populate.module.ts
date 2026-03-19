import { Module } from '@nestjs/common';
import { PopulateService } from './populate.service';
import { CategoriesModule } from '../categories/categories.module';
import { ProductsModule } from '../products/products.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    CategoriesModule, 
    ProductsModule, 
    UsersModule
  ],
  controllers: [],
  providers: [PopulateService]
})
export class PopulateModule { }
