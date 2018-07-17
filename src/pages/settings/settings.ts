import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyProvider } from '../../providers/company/company';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private company: CompanyProvider) {
  }

  ionViewDidLoad() {
    this.company.getUserData()
      .subscribe(res => {
        console.log(res);
      });
  }

}
