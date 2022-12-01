import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { UrlService } from "./url.service";

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {

  constructor(private urlService: UrlService) {
  }

  mockApiCall(): Observable<any> {
    const url = this.urlService.demoUrl;
    return of({data: ['a', 'b', 'c'], from: url})
  }

}
