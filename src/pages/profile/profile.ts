import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { AddProductPage } from '../add-product/add-product';
import { ProductProvider } from '../../providers/product/product';
import { ProductUpdatePage } from '../product-update/product-update';
import { HomePage } from '../home/home';
import { ConfigurePage } from '../configure/configure';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  idUser: string;
  cont:number;
  getResponse:any;
  products = [];
  name: string;
  lastName: string;
  username: string;
  email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public user:UserServiceProvider, public product: ProductProvider) {
    this.readProfile();
    this.read()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
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

  read(){
    this.idUser = localStorage.getItem("id");
    this.product.readProduct(this.idUser).then(data=>{
      let productData = data.response;
      this.getResponse=data;
      console.log(data);
      if(data.status == 200){
        for(this.cont = 0; this.cont <productData.length; this.cont++ ){
          this.products.push(productData[this.cont]);
          console.log(productData[this.cont].product_name);
        }
      }
    })
  }

  goToAddProduct(){
    this.navCtrl.push(AddProductPage);
  }

  goToProductUpdate(productId: number){
    this.navCtrl.push(ProductUpdatePage);
    console.log("El id del producto es: "+productId);
    this.product.addId(productId);
  }

  goToConfigure(){
    this.navCtrl.push(ConfigurePage);
  }


}
