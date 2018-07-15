import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})
export class ReviewPage {

  culture: number;
  benefit: number;
  balance: number;
  speed: number;
  overall: number;
  review: string;

  companyProfile: any;
  name: string;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.companyProfile = this.navParams.get("data");
      this.name = this.companyProfile.companyname;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPage');
  }

}
