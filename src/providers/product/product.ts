import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {
  ip:string;
  id: number;

  constructor(public http: HttpClient) {
    console.log('Hello ProductProvider Provider');
    this.ip='http://localhost:8080/Shopping_car'
  }

  addProduct(idUser:string, name:string, des: string, prices: string, quantify: string){
    console.log("El id es: "+idUser)
    let datos = {user_id: idUser, product_name: name, product_des: des, 
      product_prices: prices, quantify: quantify, tipo:"add"}
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      } 
    };
    return new Promise(resolve => {
      this.http.post(`${this.ip}/Producto`,JSON.stringify(datos),options)
         .subscribe(data => {
           console.log(data);
           resolve(data);
          });
     });
  }
  readProduct(idUser: string){
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      } 
    };
    return new Promise(resolve => {
      this.http.get(`${this.ip}/Producto?user_id=${idUser}`,options)
         .subscribe(data => {
           console.log(data);
           resolve(data);
          });
     });
  }

  readProductDetail(){
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      } 
    };
    return new Promise(resolve => {
      this.http.get(`${this.ip}/ProductoEspecifico?product_id=${this.id}`,options)
         .subscribe(data => {
           console.log(data);
           resolve(data);
          });
     });
  }

  deleteProduct(){
    let datos = {product_id: this.id, tipo:"delete"}
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      } 
    };
    return new Promise(resolve => {
      this.http.post(`${this.ip}/Producto`, JSON.stringify(datos), options)
         .subscribe(data => {
           console.log(data);
           resolve(data);
          });
     });
  }

  updateProduct( name:string, des:string, prices:string, quantify:string){
    console.log("El id para el update es:"+this.id);
    let datos = {product_id: this.id, product_name: name, product_des: des,
      product_prices:prices, quantify: quantify, tipo:"update"}
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      } 
    };
    return new Promise(resolve => {
      this.http.post(`${this.ip}/Producto`,JSON.stringify(datos),options)
         .subscribe(data => {
           console.log(data);
           resolve(data);
          });
     });
  }

  addId(id:number){
    this.id = id;
  }

}
