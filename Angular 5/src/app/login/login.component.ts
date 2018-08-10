import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '../../../node_modules/@angular/router';
import { Login} from '../shared/models/Login';
import { LoginParams } from '../shared/models/LoginParams';
import { LoginService } from '../shared/services/external/login/login.service';
import { UserService } from '../shared/services/internal/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private _registerService: LoginService,
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(
        '',
        [Validators.required, Validators.email]
      ),
      'password': new FormControl(
        '',
        [Validators.required]
      )
    });
  }


  onSubmit() {
    if (this.loginForm.valid) {
      // Construct the object to send.
      const login: LoginParams = {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value
      };
      // Make call using live API
      let response: Observable<Login>;
      response = this._registerService.Login(login);
      response.subscribe(
        (data) => {
          if (data.result === true) {
            // Save in user service.
            // if (this._userService.setActiveToken(data.token)) {
              // Do redirect
              this._router.navigate(['/artist']);
            // }
          }
        },
        (error) => {

        }
      );
    }
  }
}
