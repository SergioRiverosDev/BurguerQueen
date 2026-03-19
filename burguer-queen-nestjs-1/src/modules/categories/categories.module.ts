import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { MongoConnectionService } from '../mongo-connection/mongo-connection.service';
import { MongoConnectionModule } from '../mongo-connection/mongo-connection.module';
import { categorySchema } from './schemas/category.schema';
import { ICategory } from './interfaces/category.interface';

@Module({
  imports: [
    MongoConnectionModule
  ],
  controllers: [
    CategoriesController
  ],
  providers: [
    CategoriesService,
    {
      provide: 'CATEGORY_MODEL',
      useFactory: (db: MongoConnectionService) => db.getConnection().model<ICategory>('Category', categorySchema, 'categories'),
      inject: [MongoConnectionService]
    }],
  exports: [CategoriesService]
})
export class CategoriesModule { }
