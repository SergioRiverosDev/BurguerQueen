import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { MongoConnectionService } from '../mongo-connection/mongo-connection.service';
import { productSchema } from './schemas/product.schema';
import { IProduct } from './interfaces/product.interface';
import { MongoConnectionModule } from '../mongo-connection/mongo-connection.module';
import { CategoriesModule } from '../categories/categories.module';

@Module({
  imports: [MongoConnectionModule, CategoriesModule],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    {
      provide: 'PRODUCT_MODEL',
      useFactory: (db: MongoConnectionService) => db.getConnection().model<IProduct>('Product', productSchema, 'products'),
      inject: [MongoConnectionService]
    }
  ],
  exports: [ProductsService]
})
export class ProductsModule {}
