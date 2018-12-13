import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  imc:number
  alt:number
  peso:number
  nome:string
  status:string
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.imc = this.navParams.get("imc")
      this.alt = this.navParams.get("alt")
      this.status = this.navParams.get("status")
      this.peso = this.navParams.get("peso")
      this.nome = this.navParams.get("nome")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
