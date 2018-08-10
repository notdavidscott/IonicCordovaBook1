import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContentsPage } from './contents';

@NgModule({
  declarations: [
    ContentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ContentsPage),
  ],
})
export class ContentsPageModule {}
