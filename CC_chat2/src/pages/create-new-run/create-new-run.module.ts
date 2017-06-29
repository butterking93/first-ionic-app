import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateNewRunPage } from './create-new-run';

@NgModule({
  declarations: [
    CreateNewRunPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateNewRunPage),
  ],
  exports: [
    CreateNewRunPage
  ]
})
export class CreateNewRunPageModule {}
