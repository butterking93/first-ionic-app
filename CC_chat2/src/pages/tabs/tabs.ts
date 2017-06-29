import { Component } from '@angular/core';

import { LoginModalPage } from '../LoginModal/LoginModal';
import { customSettingsPage } from '../custom-settings/custom-settings';
import { HomePage } from '../home/home';
import {MembersDetailPage } from '../members-detail/members-detail';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MembersDetailPage;
  tab3Root = customSettingsPage;

  constructor() {

  }
}
