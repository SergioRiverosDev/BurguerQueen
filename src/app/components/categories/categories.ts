import { Component, inject } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Observable } from 'rxjs';
import { CategoryModel } from '../../models/category.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserOrderService } from '../../services/user-order.service';

@Component({
  selector: 'app-categories',
  imports: [AsyncPipe, TranslateModule, MatCardModule, RouterLink, CommonModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private userOrderService = inject(UserOrderService);

  private categoryService = inject(CategoriesService);

  public categories$: Observable<CategoryModel[]> = this.categoryService.getCategories();

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment === 'categories') {
        setTimeout(() => {
          this.scrollToCategories();
          this.router.navigate([], { fragment: undefined, replaceUrl: true });
        }, 100);
      }
    });
  }

  scrollToCategories(): void {
    const content = document.querySelector('.app_content') as HTMLElement;
    const element = document.getElementById('categoriesScroll') as HTMLElement;

    if (content && element) {
      const headerHeight = 60;
      const elementTop = element.offsetTop - headerHeight;
      content.scrollTo({ top: elementTop, behavior: 'smooth' });
    }
  }

  placeOrder() {

    if (this.userOrderService.numProductsSignal() == 0) {
      const content = document.querySelector('.app_content') as HTMLElement;
      const element = document.getElementById('categoriesScroll') as HTMLElement;

      if (content && element) {
        const headerHeight = 60;
        const elementTop = element.offsetTop - headerHeight;
        content.scrollTo({ top: elementTop, behavior: 'smooth' });
      }
    }else{
      this.router.navigate(['/pay-order'])
    }

  }
}
