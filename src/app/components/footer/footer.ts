import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-footer',
  imports: [TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  public year: number = new Date().getFullYear();

}
