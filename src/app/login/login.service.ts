import { Injectable } from '@angular/core';
import { User } from './user';
import {ajax, AjaxResponse} from 'rxjs/ajax';
import {of, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl:string = 'http://localhost:88/';
  constructor() { }

  doLogin(us:User){
    return ajax.post(this.baseUrl + 'login',
    us,
    { 'Content-Type':'application/json'}
    );
  }
}
