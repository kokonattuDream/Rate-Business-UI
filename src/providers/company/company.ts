import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the CompanyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CompanyProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CompanyProvider Provider');
  }

  createCompany(name, address, city, country, sector, website, userId?): Observable<any>{
    return this.http.post('http://localhost:3000/api/company/create', {
      name,
      address,
      city,
      country,
      sector,
      website,
      userId
    });
  }
}
