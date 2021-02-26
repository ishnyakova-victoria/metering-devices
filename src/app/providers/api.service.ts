import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_LOGIN } from '../constants/constants';
import { AuthorizationRequestBody } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(
    private _httpClient: HttpClient
  ) { }

  public logIn(email: string, password: string): Observable<any> {
    const body: AuthorizationRequestBody = {
      email: email,
      password: password,
      personal_data_access: true
    };
    
    return this._httpClient.post(URL_LOGIN, body);
  }
}
