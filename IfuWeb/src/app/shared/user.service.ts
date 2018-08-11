import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
import { user } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = 'http://localhost:50216';

  constructor(private http: HttpClient) { }

  registerUser(user : user){
    const body: user = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
    return this.http.post(this.rootUrl + '/api/User/Register', body);
  }
}
