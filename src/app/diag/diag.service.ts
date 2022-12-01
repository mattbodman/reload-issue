import { Injectable } from '@angular/core';
import { CustomHttpService } from "../custom-http.service";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DiagService {

  constructor(private http: CustomHttpService) {
  }

  fetchData(): Observable<string[]> {
    return this.http.mockApiCall().pipe(
      map((response) => {
        return response.data
      })
    )
  }

}
