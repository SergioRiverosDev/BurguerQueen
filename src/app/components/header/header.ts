import { Component, inject } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatIcon,MatBadge],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

private traslateService = inject(TranslateService); 

  public languages : string[]= ['en','es'];


  changeLenguage(lenguage:string){

    this.traslateService.use(lenguage);

  }

}