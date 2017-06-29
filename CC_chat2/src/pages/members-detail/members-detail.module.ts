import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MembersDetailPage } from './members-detail';

@NgModule({
  declarations: [
    MembersDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MembersDetailPage),
  ],
  exports: [
    MembersDetailPage
  ]
})
export class MembersDetailPageModule {}
