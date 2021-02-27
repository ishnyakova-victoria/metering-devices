import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ACCESS_TOKEN } from '../constants/constants';
import { ApiService } from './api.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public isLoggedIn: boolean = false;

  constructor(
    private _apiService: ApiService,
    private _storageService: StorageService
  ) {
    this.isLoggedIn = this._storageService.getItem(ACCESS_TOKEN) ? true : false;
  }

  public logIn(email: string, password: string): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      this._apiService.logIn(email, password).subscribe(
        (response) => {
          const accessToken: string = response?.data?.access_token || null;

          if (!response || !accessToken) {
            observer.error('Ошибка авторизации');

            return;
          }

          this._storageService.setItem(ACCESS_TOKEN, accessToken);
          this.isLoggedIn = true;

          observer.next(response);
          observer.complete();
        },
        (error) => {
          const logInError: string = error?.error?.error?.data?.msg || 'Ошибка авторизации';

          observer.error(logInError);
        },
        () => { }
      )
    });
  }

  public logOut(): void {
    this._storageService.removeItem(ACCESS_TOKEN);
    this.isLoggedIn = false;
  }
}
