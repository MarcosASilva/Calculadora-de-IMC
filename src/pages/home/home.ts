import { InfoPage } from './../info/info';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imc =0
  alt 
  searchVal:any = ''
  peso 
  nome:string = ''
  status:string
  itemAdd:string
  items = [ ];
  itemsExi:string[]
  constructor(public navCtrl: NavController) {
      this.itemsExi = this.items
  }
  calcImc(){
    this.imc = this.peso / (this.alt*this.alt)
    if(this.imc<16){
        this.status = "Magreza Grave"
    }    
    if(this.imc>=16&&this.imc<17){
      this.status = "Magreza Moderada"
    }
    if(this.imc>=17&&this.imc<18.5){
      this.status = "Magreza Leve"
    }
    if(this.imc>=18.5&&this.imc<25){
      this.status = "Saudável"
    }
    if(this.imc>=25&&this.imc<30){
      this.status = "Sobrepeso"
    }
    if(this.imc>=30&&this.imc<35){
      this.status = "Obesidade Grau I"
    }
    if(this.imc>=35&&this.imc<=40){
      this.status = "Obesidade Grau II"
    }
    if(this.imc>40){
      this.status = "Obesidade Grau III"
    }   
    

    
  }
  initializeItems() {
    return this.items
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.itemsExi = this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.itemsExi = this.itemsExi.filter((item) => {
        return (item[4].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  add(val){
    this.initializeItems()
    this.items.push(val)
    this.itemAdd=''
  }
  addImc(imc){
    this.items.push([this.alt,this.peso,imc,this.status, this.nome])
    this.peso = 0
    this.alt = 0
    this.nome=''
  }
  showInfo(item){
    this.navCtrl.push(InfoPage, {
      nome: item[4],
      alt: item[0],
      peso: item[1],
      imc: item[2],
      status: item[3]
    })
  }
  
}
 