import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingRunsListPage } from './pending-runs-list';

@NgModule({
  declarations: [
    PendingRunsListPage,
  ],
  imports: [
    IonicPageModule.forChild(PendingRunsListPage),
  ],
  exports: [
    PendingRunsListPage
  ]
})
export class PendingRunsListPageModule {}
