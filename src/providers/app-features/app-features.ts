import { Injectable } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { App } from 'ionic-angular';

@Injectable()
export class AppFeaturesProvider {

  public enableMenu: Function;
  public disableMenu: Function;
  public nextPage: Function;
  public changePage: Function;

  constructor(private menuCtrl: MenuController, private app: App) {
    this.enableMenu = () => {
      this.menuCtrl = menuCtrl;
      this.menuCtrl.enable(true, 'myMenu');
    }
    this.disableMenu = () => {
      this.menuCtrl = menuCtrl;
      this.menuCtrl.enable(false, 'myMenu');
    }
    this.nextPage = (page) => {
      let nav = this.app.getActiveNav();
      nav.push(page);
    }
    this.changePage = (page) => {
      let nav = this.app.getActiveNav();
      nav.setRoot(page);
    }
  }



}
