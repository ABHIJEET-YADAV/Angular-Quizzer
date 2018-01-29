import { Component } from '@angular/core';

import { HomePage } from '../../pages/home/home';
import { ReferPage } from '../../pages/refer/refer';
import { AboutPage } from './../../pages/about/about';
import { ContactPage } from './../../pages/contact/contact';
import { SettingsPage } from './../../pages/settings/settings';


import { AppFeaturesProvider } from './../../providers/app-features/app-features';

@Component({
  selector: 'side-menu',
  templateUrl: 'side-menu.html',
  providers: [AppFeaturesProvider]
})
export class SideMenuComponent {

  public pages: Array<{ title: string, component: any }>;
  constructor(public appFeaturesProvider: AppFeaturesProvider) {
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Profile', component: HomePage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Refer and earn', component: ReferPage },
      { title: 'Contact Us', component: ContactPage },
      { title: 'About Us', component: AboutPage },
      { title: 'Logout', component: HomePage },
    ];
  }
  openPage(page) {
    this.appFeaturesProvider.changePage(page.component);
  }
}
