import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ICategory } from './interfaces/category.interface';
import { CategoryDto } from './dto/category-dto';

@Injectable()
export class CategoriesService {

    constructor(
        @Inject('CATEGORY_MODEL')
        private categoryModel: Model<ICategory>
    ) { }

    getCategories() {
        return this.categoryModel.find();
    }

    getCategoryByName(name: string){
        return this.categoryModel.findOne({ name });
    }

    getCategoryById(id: string){
        return this.categoryModel.findById(id);
    }

    createCategory(category: CategoryDto){
        const categoyModel = new this.categoryModel(category);
        return categoyModel.save()
    }


}
