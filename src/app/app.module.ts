import { SideMenuComponent } from './../components/side-menu/side-menu';
import { QuizCardComponent } from './../components/quiz-card/quiz-card';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { SignupPage } from '../pages/signup/signup';
import { ReferPage } from '../pages/refer/refer';
import { MobileNoVerifyPage } from '../pages/mobile-no-verify/mobile-no-verify';
import { ForgetPasswordPage } from '../pages/forget-password/forget-password';
import { SettingsPage } from '../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppFeaturesProvider } from '../providers/app-features/app-features';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    MainPage,
    SignupPage,
    ReferPage,
    QuizCardComponent,
    MobileNoVerifyPage,
    SideMenuComponent,
    ForgetPasswordPage,
    SettingsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    MainPage,
    SignupPage,
    ReferPage,
    QuizCardComponent,
    MobileNoVerifyPage,
    ForgetPasswordPage,
    SideMenuComponent,
    SettingsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AppFeaturesProvider
  ]
})
export class AppModule { }
