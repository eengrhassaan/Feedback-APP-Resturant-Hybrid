import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule} from "angularfire2";

// import { AngularFireAuth} from "angularfire2/auth";
import { AngularFireAuthModule} from "angularfire2/auth";
// import { AngularFireDatabaseModule} from "angularfire2/database";
// import { ScreenOrientation} from "@ionic-native/screen-orientation";
// import { Platform} from "ionic-angular";

import { MyApp } from './app.component';
import { HomePage} from '../pages/home/home';
import { FirstPage} from "../pages/first/first";
import { RegisterPage} from "../pages/register/register";

const firebase = {
  apiKey: "AIzaSyBPNxgl1AK3DoUIKj2DXRpshx64kjlxyzA",
    authDomain: "khaapa-restaurant.firebaseapp.com",
    databaseURL: "https://khaapa-restaurant.firebaseio.com",
    projectId: "khaapa-restaurant",
    storageBucket: "khaapa-restaurant.appspot.com",
    messagingSenderId: "832770027564"
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // environment,
    FirstPage,
    RegisterPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    // AngularFireAuth,
    // AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FirstPage,
    RegisterPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
//    ScreenOrientation,
 //   Platform,
  ]
})
export class AppModule {}
