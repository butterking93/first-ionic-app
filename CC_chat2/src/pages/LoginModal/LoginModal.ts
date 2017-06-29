import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams} from 'ionic-angular';
import { DbMethodProvider } from '../../providers/db-method/db-method';

@Component({
  selector: 'LoginModal',
  templateUrl: 'LoginModal.html'
})
export class LoginModalPage {
  user: {
    username: string
    password: any
  }
  constructor(public ViewCtrl: ViewController, public nav: NavParams, public navCtrl: NavController, public DbMethod: DbMethodProvider) {
    this.user = {
      username: '',
      password: ''
  }
}
CloseModal(){
  this.ViewCtrl.dismiss()
}

RegisterToDb(username, password){
  username = this.user.username
  password = this.user.password
  console.log(username, password)
  this.DbMethod.MakeNewUser(username, password)
  this.CloseModal()
}

ionViewWillLoad(){

}



}
