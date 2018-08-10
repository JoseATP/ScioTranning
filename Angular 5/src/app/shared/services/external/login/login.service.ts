import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { LoginParams } from '../../../models/LoginParams';
import {Login } from '../../../models/Login';
import { Observable } from 'rxjs/Observable';
import { Constant } from '../../../classes/Constant';
@Injectable()
export class LoginService {

  constructor(private _http: Http) { }
 /**
   * Call to live API
   * @param body
   */
  Login(body: LoginParams): Observable<Login> {
    return this._http.post(Constant.API + 'auth/login', body, Constant.options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error || 'Server error')); // ...errors if any
  }
}

