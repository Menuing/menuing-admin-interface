import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Login} from './login';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  getAllUsers() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.get(`${environment.API}/api/resources/users`, httpOptions);
  }

  getUser(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.get(`${environment.API}/api/resources/users/id/${Number(id)}`, httpOptions);
  }
}