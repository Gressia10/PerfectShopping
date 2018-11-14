import { Component } from '@angular/core';
import { ProductProvider } from '../../providers/product/product';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomeShoppingPage } from '../home-shopping/home-shopping';


/**
 * Generated class for the ProductUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-update',
  templateUrl: 'product-update.html',
})
export class ProductUpdatePage {

  name: string;
  description: string;
  prices: string;
  quantify: string;
  getResponse: any;
  postResponse: any;

  constructor(public navCtrl: NavController, public product: ProductProvider, public alertCtrl: AlertController) {
    this.readProductDetail()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductUpdatePage');
  }

  readProductDetail(){
    this.product.readProductDetail().then(data=>{
      let productData = data.response;
      this.getResponse=data;
      console.log(data);
      if(data.status == 200){
        this.name = productData.product_name;
        this.description = productData.product_des;
        this.prices = productData.product_prices;
        this.quantify = productData.quantify;
      }
      
    })
  }

  updateProduct(){
    this.product.updateProduct(this.name, this.description, this.prices, this.quantify).then(data=>{
      this.postResponse=data;
      console.log(data);
      if(data.status == 200){
        //this.navCtrl.setRoot(ProfilePage);
        this.showAlert('Producto actualizado');
      }
    })
  }

  deleteProduct(){
    this.product.deleteProduct().then(data=>{
      this.postResponse=data;
      console.log(data);
      if(data.status == 200){
        //this.navCtrl.setRoot(ProfilePage);
        this.showAlert('Producto Eliminado');
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
