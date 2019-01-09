import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Firebase} from './firebase';

@Injectable()
export class FirebaseService{

    constructor(private http: HttpClient) {
    }

    sendMessage(message: string) {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })
        };
        return this.http.post(`${environment.API}/api/resources/tokens/firebase/${message}`, httpOptions);
      }
}