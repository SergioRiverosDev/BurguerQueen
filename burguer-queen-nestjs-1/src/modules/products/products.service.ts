import { Inject, Injectable } from '@nestjs/common';
import { IProduct } from './interfaces/product.interface';
import { Model, Types } from 'mongoose';
import { CategoriesService } from '../categories/categories.service';
import { ProductDto } from './dto/product-dto';

@Injectable()
export class ProductsService {

    constructor(
        @Inject('PRODUCT_MODEL')
        private productModel: Model<IProduct>,
        private categoryService: CategoriesService
    ) { }

    getProductsById(id: string) {
        return this.productModel.findById(id);
    }

    async getProductsByCategory(idCategory: string) {
        return this.productModel.find({ category: new Types.ObjectId(idCategory) })
    }

    getProductsByName(name: string) {
        return this.productModel.findOne({ name })
    }

    async createProduct(product: ProductDto) {
        product.category = await this.categoryService.getCategoryByName(product.category.name);
        const productModel = new this.productModel(product);
        return productModel.save()
    }

}
