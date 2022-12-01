import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  get demoUrl(): string {
    return `url.com`;
  }

}
