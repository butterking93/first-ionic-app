import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {LoginModalPage} from '../LoginModal/LoginModal'
import { DbMethodProvider } from '../../providers/db-method/db-method';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: {
    username: string
    password: any
  }
  LoginBool: boolean
  constructor(public navCtrl: NavController, private modal: ModalController, public DbMethod: DbMethodProvider) {
    this.user = {
      username: '',
      password: ''
    }
    this.LoginBool = true
  }


  Register() {
    console.log('register fired')
    const LoginModal = this.modal.create(LoginModalPage)
    LoginModal.present()
  }
OpenLoginPanel(){
  console.log('Register page')
  this.LoginBool = !this.LoginBool
}
Login(user, password){
  user = this.user.username
  password = this.user.password
  this.DbMethod.ExistingUserLogin(user, password)
}

}
