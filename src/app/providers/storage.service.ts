import { Injectable } from '@angular/core';
import { DataStorage } from '../classes/data-storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage;

  constructor() {
    this._initStorage();
  }

  private _initStorage(): void {
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
      return false;
    }
  }

  public setItem(key: string, data: any): void {
    this._storage.setItem(key, JSON.stringify(data));
  }

  public getItem(key: string): string {
    return JSON.parse(localStorage.getItem(key));
  }

  public removeItem(key: string): void {
    this._storage.removeItem(key);
  }
}
