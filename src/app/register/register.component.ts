import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../services/user.service";
import {MatDialog} from "@angular/material/dialog";

import {RegisterMessageComponent} from "./register-message/register-message.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private userServices: UserService,public dialog: MatDialog) {
    this.registerForm = this.fb.group({
      firstName:'',
      lastName:'',
      country:'',
      city:'',
      phoneNumber:'',
      email:'',
      password:'',
    });
  }

  ngOnInit(): void {
    this.userServices.getAll().subscribe(response=>{
      console.log(response);
    })
  }

  openDialog() {
    this.dialog.open(RegisterMessageComponent);
  }

  submit() {
    console.log(this.registerForm.value);
    this.userServices.create(this.registerForm.value).subscribe(response=>{
      console.log(response);
      this.openDialog();
    })
  }


}
