import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FirebaseService } from './firebase.service';
import {Firebase} from './firebase';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  public firebase: Firebase;
  public firebaseForm: FormGroup;
  public errorMessage: string;
  public name: string;

  constructor(private fb: FormBuilder,
    private router: Router,
    private firebaseService: FirebaseService) {
    this.firebaseForm = this.fb.group({
    'name': ['',  Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.firebase = new Firebase(this.firebaseForm.getRawValue());
    this.firebaseService.sendMessage(this.firebase.name)
      .subscribe(()=>
        confirm("Message send"),
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
  }
}
