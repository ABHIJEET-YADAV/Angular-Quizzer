import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppFeaturesProvider } from './../../providers/app-features/app-features';


@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html',
  providers: [AppFeaturesProvider]
})
export class ForgetPasswordPage {

  constructor(public navCtrl: NavController, public appFeaturesProvider: AppFeaturesProvider) {
    appFeaturesProvider.disableMenu();
  }

}
