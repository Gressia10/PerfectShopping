import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { SearchProvider } from '../../providers/search/search';
import { ProductPage } from '../product/product';

/**
 * Generated class for the HomeShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-shopping',
  templateUrl: 'home-shopping.html',
})
export class HomeShoppingPage {

  productName: string;
  getResponse: any;
  products = [];
  cont: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public search:SearchProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeShoppingPage');
  }

  profile(){
    this.navCtrl.push(ProfilePage);
  }

  goTosearch(){
    this.search.searchProduct(this.productName).then(data=>{
      this.getResponse=data;
      let productData = data.response;
      console.log(data);
      if(data.status == 200){
        for(this.cont = 0; this.cont <productData.length; this.cont++ ){
          this.products.push(productData[this.cont]);
          console.log("productData: "+productData[this.cont].product_name);
        }
      }
    })
  }

  /*goToSeatchDetail(productId){
    this.navCtrl.push(ProductPage);
    console.log("El id del producto es: "+productId);
    this.search.addId(productId);
  }*/

}
