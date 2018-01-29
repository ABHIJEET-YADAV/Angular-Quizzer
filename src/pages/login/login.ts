import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ForgetPasswordPage } from '../forget-password/forget-password';
import { AppFeaturesProvider } from './../../providers/app-features/app-features';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AppFeaturesProvider]
})
export class LoginPage {

  constructor(public navCtrl: NavController, public appFeaturesProvider: AppFeaturesProvider) {
    appFeaturesProvider.disableMenu();
  }
  onLogin() {
    this.navCtrl.push(TabsPage);
  }

  onForget() {
    this.navCtrl.push(ForgetPasswordPage);
  }

}
