import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CategoryModel } from '../models/category.model';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  
  private http = inject(HttpClient);
  private URL_BASE = `${environment.urlServer}/v1/categories`;

  getCategories(){
    return this.http.get<CategoryModel[]>(this.URL_BASE).pipe(first())
  }

}
