import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyProvider } from '../../providers/company/company';

/**
 * Generated class for the CreatecompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createcompany',
  templateUrl: 'createcompany.html',
})
export class CreatecompanyPage {

  name: string;
  address: string;
  city: string;
  country: string;
  sector: string;
  website: string;
  userId: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private company: CompanyProvider) {
  }

  ionViewDidLoad() {
    this.company.getUserData()
      .subscribe(res => {
        this.userId = res.user._id;
      });
  }

  register(){
    this.company.createCompany(this.name, this.address, this.city, this.country, this.sector, this.website, this.userId)
    .subscribe(res => {
      console.log(res);
    })
  }
}
