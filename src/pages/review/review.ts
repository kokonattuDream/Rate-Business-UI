import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyProvider } from '../../providers/company/company';


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

  userId: any;
  companyProfile: any;
  name: string;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private company: CompanyProvider) {
      this.companyProfile = this.navParams.get("data");
      this.name = this.companyProfile.companyname;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPage');
    this.getData();
  }

  addReview(){
    this.company.addCompanyReview(this.companyProfile._id, this.culture, this.benefit, this.balance, this.speed, this.overall, this.review, this.userId)
      .subscribe(res =>{
        console.log(res);
      })
  }

  getData(){
    this.company.getUserData()
      .subscribe(res => {
        if(res.user !== null){
          this.userId = res.user._id;
        }
      });
  }
}
