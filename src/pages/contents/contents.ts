import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, ModalController, NavParams } from 'ionic-angular';
import { Page1Page } from '../page1/page1';
import { Page2Page } from '../page2/page2';
import { Page3Page } from '../page3/page3';

export class Page {
  id: number;
  name: string;
  content: string;
}

// const PAGES: Page[] = [
//   { id: 1, name: 'Part 1', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod venenatis purus, auctor congue nisi fringilla blandit."},
//   { id: 2, name: 'Part 2', content: "Phasellus tellus nisl, ultrices quis tellus ut, ullamcorper suscipit dolor. Maecenas tincidunt, sapien ut mattis vulputate, lectus nisl volutpat erat, nec dignissim erat justo quis mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque pharetra lacinia finibus. " },
//   { id: 3, name: 'Part 3', content: "Sed arcu nibh, pretium id dictum id, rutrum id tellus. Sed dapibus neque id neque convallis tempor. Etiam condimentum elit nibh, quis consequat tortor mattis eu. Sed id diam finibus elit lacinia tempor ac id sapien. Ut quis ultrices nunc. Quisque magna purus, laoreet ut sollicitudin eget, rutrum sit amet leo. Phasellus volutpat, libero eu fringilla hendrerit, nisi diam vulputate odio, ut laoreet sem sapien id massa. " }

// ];

@IonicPage()
@Component({
  selector: 'page-contents',
  templateUrl: 'contents.html',
})
export class ContentsPage {

  page1 = Page1Page;
  page2 = Page2Page;
  page3 = Page3Page;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentsPage');
  }

  public onButtonClicked(): void {
    this.viewCtrl.dismiss();
  }

}
