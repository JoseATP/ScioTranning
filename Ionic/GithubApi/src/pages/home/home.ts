
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  namInp: any;

 
  constructor(public navCtrl: NavController) { }

    sendUser(nameI) {
      this.navCtrl.push(UsersPage, 
      {name:nameI});
      console.log(nameI);
    }
            
}




