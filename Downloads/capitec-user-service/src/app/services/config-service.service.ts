import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {

  constructor() { }

  get rootUrl(): string {
    return (window as any).__env?.rootUrl;
  }
}
