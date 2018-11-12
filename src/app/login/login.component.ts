import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { LoginService } from './login.service';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Login;
  errorMessage = 'This user doesn\'t exist or bad credentials';

  constructor(private route: ActivatedRoute, private loginService: LoginService) { }

  ngOnInit() {
    var id = this.route.params['value'].id;
    this.loginService.getUser(username)
      .subscribe(
        (user: Login) => {
          this.user = user;
        },
        error => this.errorMessage = <any>error.message);
  }

  login(username, pwd) {
  }

}
