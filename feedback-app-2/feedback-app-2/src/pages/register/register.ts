import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth} from "angularfire2/auth";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('firstName') firstName;
  @ViewChild('lastName') lastName;
  @ViewChild('email') email;
  @ViewChild('contact') contact;
  @ViewChild('password') password;
  constructor(public fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUserFunction(){
    this.fire.auth.createUserWithEmailAndPassword(this.email.value,this.password.value)
      .then(data =>{
          console.log('Data from Server',data);
        }

      )
  }
}
