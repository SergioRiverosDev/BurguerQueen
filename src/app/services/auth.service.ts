import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserModel } from '../models/user.model';
import { AuthCredentialsModel } from '../models/auth-credentials.model';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 
  private http = inject(HttpClient);
  private URL_BASE = `${environment.urlServer}/v1/auth`;

  login(user:UserModel){
    return this.http.post<AuthCredentialsModel>(`${this.URL_BASE}/login`, user).pipe(first())
  }
}
