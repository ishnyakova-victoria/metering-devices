import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ApiService } from '../providers/api.service';
import { MeteringDevice } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class MeteringDeviceService {

  constructor(
    private _apiService: ApiService
  ) { }

  public load(page: number, sortField: string, sort: string, perPage: number): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      this._apiService.loadMeteringDevices(page, sortField, sort, perPage).subscribe(
        (response) => {
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
}
