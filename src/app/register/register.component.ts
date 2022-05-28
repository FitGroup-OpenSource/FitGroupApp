import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {
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
  }

  submit() {
    console.log(this.registerForm.value);
  }

}
