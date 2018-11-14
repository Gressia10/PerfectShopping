import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { HomeShoppingPage } from '../pages/home-shopping/home-shopping';
import { ProfilePage } from '../pages/profile/profile';
import { ProductProvider } from '../providers/product/product';
import { AddProductPage } from '../pages/add-product/add-product';
import { ProductUpdatePage } from '../pages/product-update/product-update';
import { ConfigurePage } from '../pages/configure/configure';
import { SearchProvider } from '../providers/search/search';
import { ProductPage } from '../pages/product/product';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage, 
    HomeShoppingPage, 
    ProfilePage,
    AddProductPage,
    ProductUpdatePage, 
    ConfigurePage,
    ProductPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    HomeShoppingPage, 
    ProfilePage,
    AddProductPage,
    ProductUpdatePage, 
    ConfigurePage, 
    ProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    ProductProvider,
    SearchProvider,
  ]
})
export class AppModule {}
