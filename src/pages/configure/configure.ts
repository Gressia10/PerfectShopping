import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { HomePage } from '../home/home';
import { HomeShoppingPage } from '../home-shopping/home-shopping';

/**
 * Generated class for the ConfigurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configure',
  templateUrl: 'configure.html',
})
export class ConfigurePage {

  idUser: string;
  getResponse: any;
  postResponse: any;

  name: string;
  lastName: string;
  username: string;
  email:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public user:UserServiceProvider, public alertCtrl: AlertController) {
    this.readProfile();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurePage');
  }

  readProfile(){
    this.idUser = localStorage.getItem("id");
    this.user.profile(this.idUser).then(data=>{
      this.getResponse=data;
      console.log(data);
      if(data.status == 200){
        this.name = data.response.user_name;
        this.lastName = data.response.user_last_name;
        this.username = data.response.user_username;
        this.email = data.response.user_email;
      }
    })
  }

  deleteUser(){
    this.idUser = localStorage.getItem("id");
    this.user.deleteUser(this.idUser).then(data=>{
      this.postResponse=data;
      console.log(data);
      if(data.status == 200){
        this.navCtrl.setRoot(HomePage);
      }
    })
  }

  updateUser(){
    this.idUser = localStorage.getItem("id");
    this.user.updateUser(this.idUser, this.name, this.lastName, this.username, this.email).then(data=>{
      this.postResponse=data;
      console.log(data);
      if(data.status == 200){
        //this.navCtrl.setRoot(ProfilePage);
        this.showAlert("Usuario Actualizado");
        this.navCtrl.setRoot(HomeShoppingPage);
      }
    })
  }

  showAlert(ti: string) {
    const alert = this.alertCtrl.create({
      title: ti,
      //subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

}
