import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { LoginService } from './login.service';
import { Admin } from './admin';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

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


  constructor(private fb:FormBuilder, 
    private route:ActivatedRoute, 
    private router: Router, 
    private loginService: LoginService,
    @Inject(DOCUMENT) private document: any){}
    
  ngOnInit() {
    this.loginForm = this.fb.group({
      'username': ['',  Validators.required],
      'password': ['',  Validators.required]
    });

    let element = this.document.getElementsByClassName('navbar')[0];
    element.style.display =  'none';
  }

  login():void {
    this.admin = new Admin(this.loginForm.getRawValue());
    this.loginService.getUser(this.admin.username)
      .subscribe(
        (admin: Admin) => {
          this.receivedAdmin = admin;
          let element = this.document.getElementsByClassName('navbar')[0];
          element.style.display = 'block';
          if(this.receivedAdmin[0] == null ||
            this.receivedAdmin[0].password == null || 
          this.admin.password !== this.receivedAdmin[0].password){
            alert("wrong");
            return;
          }   
          this.router.navigate(['/recipes/']);
        },
        error => this.errorMessage = <any>error.message);
    
  }

}
