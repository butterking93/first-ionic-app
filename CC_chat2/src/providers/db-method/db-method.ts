import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController}  from 'ionic-angular';
/*
  Generated class for the DbMethodProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DbMethodProvider {

  constructor(private AFauth: AngularFireAuth, public NavCtrl: NavController ) {
    console.log('Hello DbMethodProvider Provider');
  }
async MakeNewUser(user, password){
  const result = await this.AFauth.auth.createUserWithEmailAndPassword(user, password);
  console.log(result)
}
async ExistingUserLogin(user, password){
  const result = await this.AFauth.auth.signInWithEmailAndPassword(user, password)
  if(result){
    this.NavCtrl.push('CreateNewRunPage')
  }
//show RegisteredUser list
fetchRegisteredUser(user){

}
//Logout
Logout(){
  this.AFauth.auth.signOut()
  this.NavCtrl.push('HomePage')
}
}
}
