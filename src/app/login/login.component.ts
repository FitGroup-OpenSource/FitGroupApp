import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email:'',
      password:''
    });
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.loginForm.value);
  }
}
