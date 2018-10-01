import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MensagensPage } from '../pages/mensagens/mensagens';
import { ViagensPage } from '../pages/viagens/viagens';
import { PerfilPage } from '../pages/perfil/perfil';
import { LugaresPage } from '../pages/lugares/lugares';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { InlineSVGModule } from 'ng-inline-svg';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MensagensPage,
    ViagensPage,
    PerfilPage,
    LugaresPage
  ],
  imports: [
    BrowserModule,
    InlineSVGModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBospJqxJz2zgt9R5X3uybfLGReK9DVRhY",
      authDomain: "roadup-desenv.firebaseapp.com",
      databaseURL: "https://roadup-desenv.firebaseio.com",
      projectId: "roadup-desenv",
      storageBucket: "roadup-desenv.appspot.com",
      messagingSenderId: "843547099418"
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MensagensPage,
    ViagensPage,
    PerfilPage,
    LugaresPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
