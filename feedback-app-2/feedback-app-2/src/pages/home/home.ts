import {Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirstPage } from "../first/first";
import { RegisterPage} from "../register/register";
import { AngularFireAuth} from "angularfire2/auth";
// import { AngularFireModule} from "angularfire2";
// import { AngularFireAuthModule} from "angularfire2/auth";
// import { AngularFireDatabaseModule} from "angularfire2/database";
// import {ScreenOrientation} from "@ionic-native/screen-orientation";
// import { Platform} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  @ViewChild('username') username;
  @ViewChild('password') password;
  constructor(public fire:AngularFireAuth, public navCtrl: NavController) {
   // AngularFireModule.initializeApp(environment.firebase);
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    // platForm.ready().then(() => {
    //   this.screenOrientation.lock('landscape');
    //   screen.msLockOrientation('landscape');
    //   this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    // })
  }

  openFirstPage(){
    this.navCtrl.push(FirstPage);
  }

  loginFunction(){
    this.fire.auth.signInWithEmailAndPassword(this.username.value,this.password.value).
      then(data=>{
        console.log('dara',data);
    })
  }

  registerFunction(){
    this.navCtrl.push(RegisterPage);
  }

}
