import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, OneSignal } from 'ionic-native';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      
      StatusBar.styleDefault();
      Splashscreen.hide();

      this.oneSignalPush();

    });
  }

  oneSignalPush(){
    alert('Push Satrted!');

    OneSignal.startInit('e103f2d1-4f75-4549-a15d-39a14bb3d3e8', '170907800138');
    OneSignal.inFocusDisplaying(OneSignal.OSInFocusDisplayOption.InAppAlert);
    OneSignal.getIds().then((ids) => {
         alert('getIds: ' + JSON.stringify(ids));
    });

    OneSignal.handleNotificationReceived().subscribe((msg) =>{
        alert('Notification received');
        
   });

   OneSignal.handleNotificationOpened().subscribe((msg) => {
      alert('Notification opened');
      
   });

   OneSignal.endInit();

   //OneSignal.setLogLevel({logLevel: 6, visualLevel: 6});

  }
}
