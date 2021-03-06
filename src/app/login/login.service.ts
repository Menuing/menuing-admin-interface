import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Admin} from './admin';

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

    return this.http.get(`${environment.API}/api/resources/admins`, httpOptions);
  }

  getUser(username: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(`${environment.API}/api/resources/admins/?username=${username}`, httpOptions);
  }
}