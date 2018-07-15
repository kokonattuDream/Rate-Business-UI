import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';


@IonicPage()
@Component({
  selector: 'page-companyprofile',
  templateUrl: 'companyprofile.html',
})
export class CompanyprofilePage {

  profile: any;
  user: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) {
    this.profile = this.navParams.get("data");

  }

  ionViewDidLoad() {
  }

  reviewPage(profile){
    this.navCtrl.push("ReviewPage", {"data": profile});
  }

  viewReviews(profile){
    this.navCtrl.push("ViewreviewsPage", {"companyData": profile});
  }

  averageRating(arr){
    if(arr === undefined){
      return 0;
    }
    
    if(arr.length <= 0){
      return arr.length;
    } else {
      return _.mean(arr);
    }
  }

  ratingSum(arr){
    if(arr === undefined){
      return 0;
    }
    if(arr.length <= 0){
      return arr.length;
    } else {
      return _.sum(arr);
    }
  }

}
