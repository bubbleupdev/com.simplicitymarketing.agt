import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    createSuccess = false;
    registerCredentials = {email: '', password: ''};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    login() {
        this.navCtrl.setRoot(TabsPage);

    }


}
