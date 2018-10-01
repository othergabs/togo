import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InlineSVGModule } from 'ng-inline-svg';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { MensagensPage } from '../pages/mensagens/mensagens';
import { ViagensPage } from '../pages/viagens/viagens';
import { PerfilPage } from '../pages/perfil/perfil';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MensagensPage,
    ViagensPage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    InlineSVGModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MensagensPage,
    ViagensPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
