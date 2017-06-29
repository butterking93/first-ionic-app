import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PendingRunsListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 //Need to receive userinfo from create-new-run to determine what users to display status-info abt

@IonicPage()
@Component({
  selector: 'page-pending-runs-list',
  templateUrl: 'pending-runs-list.html',
})
export class PendingRunsListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingRunsListPage');
  }

}
