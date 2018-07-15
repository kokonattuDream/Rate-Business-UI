import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CompanyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-companyprofile',
  templateUrl: 'companyprofile.html',
})
export class CompanyprofilePage {

  culture: number;
  benefits: number;
  balance: number;
  speed: number;
  overall: number;
  review: string;

  companyProfile: any;
  name: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) {
    this.companyProfile = this.navParams.get("data");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyprofilePage');
  }

  reviewPage(profile){
    this.navCtrl.push("ReviewPage", {"data": profile});
  }

}
