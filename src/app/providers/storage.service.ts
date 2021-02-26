import { Injectable } from '@angular/core';
import { DataStorage } from '../classes/data-storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage;

  constructor() {
    this._setStorage();
  }

  private _setStorage(): void {
    if (this._isLocalStorageExist()) {
      this._storage = localStorage;
    } else {
      this._storage = new DataStorage();
    }
  }

  private _isLocalStorageExist(): boolean {
    try {
      const testData: string = 'test';

      localStorage.setItem(testData, testData);
      localStorage.removeItem(testData);

      return true;
    } catch(error) {
      console.error(error);

      return false;
    }
  }

  public setData(key: string, data: any): void {
    this._storage.setItem(key, JSON.stringify(data));
  }

  public getDataByKey(key: string): string {
    return JSON.parse(localStorage.getItem(key));
  }

  public removeDataByKey(key: string): void {
    this._storage.removeItem(key);
  }
}
