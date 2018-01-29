import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppFeaturesProvider } from './../../providers/app-features/app-features';

import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
  providers: [AppFeaturesProvider]

})
export class MainPage {

  constructor(public navCtrl: NavController, public appFeaturesProvider: AppFeaturesProvider) {
    appFeaturesProvider.disableMenu();
  }

  onLogin() {
    this.navCtrl.push(LoginPage);
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }

}