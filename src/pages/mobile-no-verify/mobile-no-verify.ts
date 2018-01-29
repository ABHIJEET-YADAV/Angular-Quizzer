import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppFeaturesProvider } from './../../providers/app-features/app-features';

@Component({
  selector: 'page-mobile-no-verify',
  templateUrl: 'mobile-no-verify.html',
})
export class MobileNoVerifyPage {

  constructor(public navCtrl: NavController, public appFeaturesProvider: AppFeaturesProvider) {
    appFeaturesProvider.disableMenu();
  }

  onVerify() {
    this.navCtrl.push(TabsPage);
  }

}
