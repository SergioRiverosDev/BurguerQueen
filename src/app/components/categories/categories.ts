import { Component, inject } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Observable } from 'rxjs';
import { CategoryModel } from '../../models/category.model';
import { AsyncPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [AsyncPipe, TranslateModule,MatCardModule,RouterLink],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {

  private categoryService = inject(CategoriesService);

  public categories$: Observable<CategoryModel[]>= this.categoryService.getCategories();

}
