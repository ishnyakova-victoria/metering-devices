import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ACCESS_TOKEN, DEFAULT_AUTHORIZATION_REQUEST_BODY, DEFAULT_METERING_DEVICES_REQUEST_BODY, URL_LOGIN, URL_METERING_DEVICES } from '../constants/constants';
import { AuthorizationRequestBody, MeteringDevicesRequestBody } from '../types/types';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(
    private _httpClient: HttpClient,
    private _storageService: StorageService
  ) { }

  public logIn(email: string, password: string): Observable<any> {
    const body: AuthorizationRequestBody = {
      ...DEFAULT_AUTHORIZATION_REQUEST_BODY,
      email,
      password
    };
    
    return this._httpClient.post(URL_LOGIN, body);
  }

  public loadMeteringDevices(page: number, sortField: string, sort: string, perPage: number): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({'Authorization': `Bearer ${this._storageService.getItem(ACCESS_TOKEN)}`});
    const body: MeteringDevicesRequestBody = {
      ...DEFAULT_METERING_DEVICES_REQUEST_BODY,
      page,
      sort,
      sort_field: sortField,
      per_page: perPage
    };
    
    return this._httpClient.post(URL_METERING_DEVICES, body, {headers: headers});
  }
}
