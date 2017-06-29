import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { HttpModule} from '@angular/http'
import { AngularFireAuthModule } from 'angularfire2/auth';


import { LoginModalPage } from '../pages/LoginModal/LoginModal';
import { customSettingsPage } from '../pages/custom-settings/custom-settings';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {MembersDetailPage } from '../pages/members-detail/members-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DbMethodProvider } from '../providers/db-method/db-method';

export const firebase_config = {
    apiKey: "AIzaSyB_sFPEIDy7PZeKgmhFLEsWRv-bbfTfuN8",
    authDomain: "ccchat-78670.firebaseapp.com",
    databaseURL: "https://ccchat-78670.firebaseio.com",
    projectId: "ccchat-78670",
    storageBucket: "ccchat-78670.appspot.com",
    messagingSenderId: "151789641011"
};
@NgModule({
  declarations: [
    MyApp,
    LoginModalPage,
    customSettingsPage,
    HomePage,
    TabsPage,
    MembersDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      AngularFireModule.initializeApp(firebase_config),
      HttpModule,
       AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginModalPage,
    customSettingsPage,
    HomePage,
    TabsPage,
    MembersDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DbMethodProvider
  ]
})
export class AppModule {}
