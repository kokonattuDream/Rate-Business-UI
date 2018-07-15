import { CompanyProvider } from './../../providers/company/company';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  user: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private company: CompanyProvider
  ) {
  }

  ionViewDidLoad() {
    this.company.getUserData()
      .subscribe(res => {
        console.log(res.user)
        this.user = res.user;
      });
  }

  reviewPage(){
    this.navCtrl.push("ReviewPage");
  }

  goToSearch(){
    this.navCtrl.push("SearchPage");
  }

  addCompany(){
    this.navCtrl.push("CreatecompanyPage");
  }
}