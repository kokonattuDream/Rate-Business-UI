import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RegisterProvider } from './../../providers/register/register';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  fullname: string;
  email: string;
  password: string;

  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private reg: RegisterProvider, public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  loginPage(){
    this.navCtrl.setRoot("LoginPage");
  }

  userSignup(){
    this.showLoading();
    this.reg.registerUser(this.fullname, this.email, this.password).subscribe(res => {
      this.loading.dismiss();

      if(res.user){
        this.navCtrl.setRoot("HomePage");
      }

      if(res.error){
        console.log(res.error);
      }
    });

    this.fullname = '';
    this.password = '';
    this.email = '';
  }


  showLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...',
      duration: 3000
    });

    this.loading.present();
  }
}
