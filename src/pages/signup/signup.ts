import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from './../../providers/user-service/user-service';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  name: string;
  lastname: string;
  username: string;
  password: string;
  email:string;
  //getResponse:any;
  postResponse:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public user:UserServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  goToRegister(){
    this.user.registerUser(this.name, this.lastname, this.username, this.password, this.email).then(data=>{
      this.postResponse=data;
      console.log(data);
    })
  }


}
