import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppFeaturesProvider } from './../../providers/app-features/app-features';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  providers: [AppFeaturesProvider]
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public appFeaturesProvider: AppFeaturesProvider) {
    appFeaturesProvider.enableMenu();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
