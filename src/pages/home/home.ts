import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Page1Page } from '../page1/page1';
import { ContentsPage } from '../contents/contents';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  //will be using navpush
  contentsPage = ContentsPage;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  // public onButtonClicked(): void {
  //   let modal = this.modalCtrl.create(ContentsPage);
  //   modal.present();
  // }
 
  title = "The Story App";
  image = ('https://i.pinimg.com/originals/a8/f8/43/a8f843b2e537317f48bb30fd70835593.jpg');
 
}


 