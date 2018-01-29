import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppFeaturesProvider } from '../../providers/app-features/app-features';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AppFeaturesProvider]
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public appFeaturesProvider: AppFeaturesProvider) {

    appFeaturesProvider.enableMenu();

  }
  onCardClick() {
  }

}
