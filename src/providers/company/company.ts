import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

/*
  Generated class for the CompanyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CompanyProvider {

  email: any;

  constructor(
  public http: HttpClient,
  private storage: Storage,
  private platform: Platform) {

    this.platform.ready().then(() => {
      this.getEmail();
    });
  }

  getUserData(): Observable<any>{

    this.getEmail();
   
    return this.http
      .get(`http://localhost:3000/api/home/${this.email}`);
  }

  getEmail(){
    this.storage.get('useremail').then(val => {
      this.email = val;
    });
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

  getCompanies(): Observable<any>{
    return this.http  
      .get('http://localhost:3000/api/companies/all');
  }

  addCompanyReview(companyId, culture, benefits, balance, speed, overall, review, userId): Observable<any>{
    return this.http  
      .post('http://localhost:3000/api/company/review', {
        companyId,
        culture,
        benefits,
        balance,
        speed,
        overall,
        review,
        userId
      });
  }

  registerEmployee(company, user, role): Observable<any>{
    return this.http
      .post('http://localhost:3000/api/register/employee', {
        company: company,
        user: user,
        role: role
      });
  }

  uploadImage(userId, image): Observable<any>{
    return this.http
      .post('http://localhost:3000/api/v1/profile/upload',{
        userId: userId,
        image: image
      });
  }

  uploadLogo(id, image): Observable<any>{
    return this.http
      .post('http://localhost:3000/api/v1/company/upload',{
        company: id,
        image: image
      }); 
  }

  searchCompany(company): Observable<any>{
    return this.http
      .post('http://localhost:3000/api/search-company',{
        company: company
      }); 
  }
}
