import { Component } from '@angular/core';
import { AppFeaturesProvider } from './../../providers/app-features/app-features';

@Component({
  selector: 'page-refer',
  templateUrl: 'refer.html',
  providers: [AppFeaturesProvider]
})
export class ReferPage {

  constructor(public appFeaturesProvider: AppFeaturesProvider) {
    appFeaturesProvider.enableMenu();
  }
}
