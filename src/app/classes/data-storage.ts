export class DataStorage implements Storage {
  private _storage: any = {};

  constructor() { }

  readonly length: number;

  public clear(): void {
    this._storage = {};
  }

  public getItem(key: string): string | null {
    return key in this._storage ? this._storage[key] : null;
  }

  public key(index: number): string | null {
    const keys = Object.keys(this._storage);

    return index >= 0 && keys.length < index ? keys[index] : null;
  }

  public setItem(key: string, value: string): void {
    this._storage[key] = value;
  }

  public removeItem(key: string): void {
    delete this._storage[key];
  }
}
