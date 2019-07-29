import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DivisaService {

  url = 'http://data.fixer.io/api/latest?access_key=33b23d6e01efe285daf21f65e1124757';

  constructor(
    private http: HttpClient
  ) { }

  getCurrencies(): Observable<any> {
    return this.http.get<any>(
      this.url,
      { withCredentials: false }
    );
  }

}
