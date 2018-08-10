import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from './../../models/users';
import { UserServiceProvider } from './../../providers/user-service/user-service';
/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})


export class UsersPage {
  users: User;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userService: UserServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  ionViewWillLoad(){
    this.userService.getUsers(this.navParams.get('name'))
    .subscribe(
      (data) => { // Success
        this.users = data;
      },
      (error) =>{
        console.error(error);
      }
    )
  }

}
