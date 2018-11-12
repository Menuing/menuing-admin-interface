import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private apiUrl = 'http://localhost:8080/api';
  private headers = new Headers({'Content-Type': 'text/uri-list'});
  private user;
  constructor(private http : Http) { }

  ngOnInit() {
  }

  login(name, pwd) {
    this.user = {username : name};
    this.http.get(this.apiUrl+'users',JSON.stringify(this.user));
  }

}
