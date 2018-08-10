import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page1Page } from '../page1/page1';
import { Page3Page } from '../page3/page3';

/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  page1 = Page1Page;
  page3 = Page3Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }
 image = ('http://1.bp.blogspot.com/-lQZ4vFKcmdQ/U4Yd7Zu63fI/AAAAAAAABYo/Ywx_0SLWg0k/s1600/768x480x20090219_post_jpg_pagespeed_ic_SJ3qdmaz6H.jpg');
 
}
