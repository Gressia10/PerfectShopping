import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchProvider {

  ip:string;
  id: number

  constructor(public http: HttpClient) {
    console.log('Hello SearchProvider Provider');
    this.ip='http://localhost:8080/Shopping_car'
  }

  searchProduct(product_name: string){
    let options = {
      headers: {
        //'Content-type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    return new Promise(resolve => {
      this.http.get(`${this.ip}/Buscador?product_name=${product_name}`,options)
         .subscribe(data => {
           console.log(data);
           resolve(data);
          });
     });
  }

  searchDetail(){
    let datos = {product_id: this.id}
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      } 
    };
    return new Promise(resolve => {
      this.http.post(`${this.ip}/Buscador`, JSON.stringify(datos), options)
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
