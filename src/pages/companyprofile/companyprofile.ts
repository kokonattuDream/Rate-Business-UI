import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as _ from 'lodash';
import { CompanyProvider } from '../../providers/company/company';


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
    public alertCtrl: AlertController,
    private company: CompanyProvider
  ) {
    this.profile = this.navParams.get("data");

  }

  ionViewDidLoad() {
    this.company.getUserData()
      .subscribe(res => {
        this.user = res.user;
      });
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

  employeeRegister(profile){
    let alert = this.alertCtrl.create({
      title: 'Register as an employee',
      inputs:[
        {
          name:'role',
          placeholder: 'Add Role'
        }
      ],
      buttons: [
        {
          text:'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          cssClass: 'alertCss',
          handler: data =>{
            this.company.registerEmployee(profile, this.user, data.role)
              .subscribe(res=>{
                console.log(res);
              });
          }
        }
      ]
    });
    alert.present();
  }

}
