import { Component, ViewChild } from '@angular/core';
import { NavController, Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MensagensPage } from '../pages/mensagens/mensagens';
import { ViagensPage } from '../pages/viagens/viagens';
import { PerfilPage } from '../pages/perfil/perfil';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  activePage:number = 0;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  redirectToHome() {
    this.activePage = 0;
    this.nav.push(HomePage);
  }

  redirectToTravels() {
    this.activePage = 1;
    this.nav.push(ViagensPage);
  }

  redirectToChat() {
    this.activePage = 2;
    this.nav.push(MensagensPage);
  }

  redirectToProfile() {
    this.activePage = 3;
    this.nav.push(PerfilPage);
  }
}

