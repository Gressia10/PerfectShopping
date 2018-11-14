import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
//import { HTTP } from '@ionic-native/http';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {
  dataFromServe:any;
  ip:string;
  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
    //his.ip='http://localhost:3000';
    //this.ip='http://localhost:8100/api';
    this.ip='http://localhost:8080/Shopping_car'
  }
  

 /* constructor(public http: HTTP) {
    this.ip='http://192.168.1.117:3000';
  }*/

  test(num:number){
    alert(num);
  }

 
  loginUser(username:string, password:string){
    let datos = {user_username: username, user_password: password}
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      } 
    };
    return new Promise(resolve => {
      this.http.post(`${this.ip}/Login`,JSON.stringify(datos),options)
         .subscribe(data => {
           console.log(data);
           resolve(data);
          });
     });
  }

  registerUser(name:string, lastName:string, username:string, password:string, email:string){
    let datos = { user_name:name,user_last_name:lastName, user_username:username, user_password:password, user_email:email}
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    return new Promise(resolve => {
      this.http.post(`${this.ip}/Registro`,JSON.stringify(datos),options)
         .subscribe(data => {
           console.log(data);
           resolve(data);
          });
     });
  }

  logoutUser(){
    let options = {
      headers: {
        //'Content-type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    return new Promise(resolve => {
      this.http.get(`${this.ip}/Logout`,options)
         .subscribe(data => {
           console.log(data);
           resolve(data);
          });
     });
  }

  profile(idUser:string){
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      } 
    };
    return new Promise(resolve => {
      this.http.get(`${this.ip}/Login?user_id=${idUser}`,options)
         .subscribe(data => {
           console.log(data);
           resolve(data);
            //this.navCtrl.setRoot(HomePage);
          });
     });
  }

  deleteUser(idUser: string){
    let datos = { user_id: idUser}
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    return new Promise(resolve => {
      this.http.post(`${this.ip}/Logout`,JSON.stringify(datos),options)
         .subscribe(data => {
           console.log(data);
           resolve(data);
          });
     });
  }

  updateUser(idUser: string, name: string, lastName: string, username: string, email: string){
    let datos = { user_id: idUser, user_name: name, user_last_name: lastName, 
    user_username: username, user_email: email}
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    return new Promise(resolve => {
      this.http.post(`${this.ip}/User`,JSON.stringify(datos),options)
         .subscribe(data => {
           console.log(data);
           resolve(data);
          });
     });
  }

  /*addParams(name: string, lastName: string, username:string, email:string, datos:any){
    datos = datos = {user_name: name, user_las_name: lastName, user_username: username, user_email: email}
    return (datos);
  }*/

}
