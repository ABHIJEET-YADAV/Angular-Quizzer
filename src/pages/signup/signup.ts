import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppFeaturesProvider } from './../../providers/app-features/app-features';

import { MobileNoVerifyPage } from '../mobile-no-verify/mobile-no-verify';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [AppFeaturesProvider]
})
export class SignupPage {

  constructor(public navCtrl: NavController, public appFeaturesProvider: AppFeaturesProvider) {
    appFeaturesProvider.disableMenu();
  }

  onSubmit() {
    this.navCtrl.push(MobileNoVerifyPage);
  }
}
