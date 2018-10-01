import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { LugaresPage } from '../lugares/lugares';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  teste(){
    const modal = this.modalCtrl.create(LugaresPage);
    modal.present();
  }

}
