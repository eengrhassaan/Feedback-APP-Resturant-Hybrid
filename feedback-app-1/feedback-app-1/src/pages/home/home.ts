import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

@IonicPage({
  name: 'HomePage'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}