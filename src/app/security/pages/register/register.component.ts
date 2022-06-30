import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {MatDialog} from "@angular/material/dialog";

import {RegisterMessageComponent} from "./register-message/register-message.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private userServices: UserService,public dialog: MatDialog, private router:Router) {
    this.registerForm = this.fb.group({
      username:'',
      email:'',
      password:''
    });
  }

  ngOnInit(): void {
    console.clear();
  }

  openDialog() {
    this.dialog.open(RegisterMessageComponent);
  }

  submit() {
    this.userServices.registerUser(this.registerForm.getRawValue())
        .subscribe(response=> {
          console.clear();
          this.router.navigate(['login'])
        });
  }


}
