import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeShoppingPage } from './home-shopping';

@NgModule({
  declarations: [
    HomeShoppingPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeShoppingPage),
  ],
})
export class HomeShoppingPageModule {}
