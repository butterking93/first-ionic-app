import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DbMethodProvider } from '../../providers/db-method/db-method';

@Component({
  selector: 'custom-settings',
  templateUrl: 'custom-settings.html'
})
export class customSettingsPage {

  constructor(public navCtrl: NavController, private DbMethod: DbMethodProvider) {

  }
Logout(){
  this.DbMethod.Logout()
}
}
