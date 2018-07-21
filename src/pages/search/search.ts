import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, GESTURE_TOGGLE } from 'ionic-angular';
import { CompanyProvider } from '../../providers/company/company';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  companyname: string;

  searchResults = [];
  showList = true;
  showResults = [];
  results = false;
  noResults = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private company: CompanyProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  searchCompany(){
    this.company.searchCompany(this.companyname)
      .subscribe(res => {
        if(res.results.length > 0){
          this.results = true;
          this.noResults = false;
          this.showResults = res.results;
          this.searchResults = res.results;
        } else {
          this.results = false;
          this.noResults = true;
          this.showResults = res.results;
          this.searchResults =[{"companyname": "No result found"}];
        }
      })
  }

  onCancel(event){

  }

  onClear(event){

  }
}
