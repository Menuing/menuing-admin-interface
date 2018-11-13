import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { LoginService } from './login.service';
import { Admin } from './admin';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin: Admin;
  errorMessage = 'This user doesn\'t exist or bad credentials';
  loginForm: FormGroup;
  receivedAdmin:Admin;

  constructor(private fb:FormBuilder, private route:ActivatedRoute, private router: Router, private loginService: LoginService){}
    
  ngOnInit() {
    console.log("entra");
    this.loginForm = this.fb.group({
      'username': ['',  Validators.required],
      'password': ['',  Validators.required]
    });
  }

  login():void {
    console.log("wtf");
    this.admin = new Admin(this.loginForm.getRawValue);
    this.loginService.getUser(this.admin.username)
      .subscribe(
        (admin: Admin) => {
          this.receivedAdmin = admin;
        },
        error => this.errorMessage = <any>error.message);
    if(this.admin.password === this.receivedAdmin.password){
      alert("wrong");
      return;
    }   

    alert("sccess!!!");    
  }

}
