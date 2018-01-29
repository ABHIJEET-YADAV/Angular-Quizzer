import { AppFeaturesProvider } from './../../providers/app-features/app-features';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [AppFeaturesProvider]

})
export class AboutPage {

  constructor(public navCtrl: NavController, public appFeaturesProvider: AppFeaturesProvider) {
    appFeaturesProvider.enableMenu();
  }

}
