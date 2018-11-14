import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { AlertController } from 'ionic-angular';
import { HomeShoppingPage } from '../home-shopping/home-shopping';

/**
 * Generated class for the AddProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage {

  idUser: string;
  name: string;
  description: string;
  prices: string;
  quantify: string;
  postResponse: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public product: ProductProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProductPage');
  }

  addProduct(){
    this.idUser = localStorage.getItem("id");
    this.product.addProduct(this.idUser, this.name, this.description, this.prices, this.quantify).then(data=>{
      this.postResponse=data;
      console.log(data);
      if(data.status == 200){
        this.showAlert("Producto creado");
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
