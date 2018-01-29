import { Component } from '@angular/core';

import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabRoot = HomePage;
  params1: Object = { title: "Live Quiz" };
  params2: Object = { title: "Upcoming Quiz" };
  params3: Object = { title: "Completed Quiz" };

  constructor() {

  }
}
