import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-footer',
  imports: [TranslateModule, MatIconModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Footer {

  public year: number = new Date().getFullYear();

}
