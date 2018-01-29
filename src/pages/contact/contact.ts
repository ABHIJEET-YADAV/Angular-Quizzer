import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppFeaturesProvider } from './../../providers/app-features/app-features';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [AppFeaturesProvider]
})
export class ContactPage {

  constructor(public navCtrl: NavController, public appFeaturesProvider: AppFeaturesProvider) {
    appFeaturesProvider.enableMenu();
  }

}
