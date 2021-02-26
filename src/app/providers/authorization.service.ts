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
    this.isLoggedIn = this._storageService.getDataByKey(ACCESS_TOKEN) ? true : false;
  }

  public logIn(email: string, password: string): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      this._apiService.logIn(email, password).subscribe(
        (response) => {
          const accessToken: string = response?.data?.access_token || null;

          if (!response || !accessToken) {
            observer.next(null);
            observer.complete();

            return;
          }

          this._storageService.setData(ACCESS_TOKEN, accessToken);
          this.isLoggedIn = true;

          observer.next(response);
          observer.complete();
        },
        (error) => {
          observer.error(error);
        },
        () => { }
      )
    });
  }

  public logOut(): void {
    this._storageService.removeDataByKey(ACCESS_TOKEN);
    this.isLoggedIn = false;
  }
}
