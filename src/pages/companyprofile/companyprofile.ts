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

 

  profile: any;
  user: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) {
    this.profile = this.navParams.get("data");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyprofilePage');
  }

  reviewPage(profile){
    this.navCtrl.push("ReviewPage", {"data": profile});
  }

}
