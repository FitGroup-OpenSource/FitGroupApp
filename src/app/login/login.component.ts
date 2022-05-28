import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private userService:UserService, private router:Router) {
    this.loginForm = this.fb.group({
      email:'',
      password:''
    });
  }

  ngOnInit(): void {

  }

  submit() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    console.log(this.loginForm.value);
    this.userService.getByEmail(email).subscribe(response=>{
      console.log(response);
      if(response && response.length > 0){
        if(response[0].password === password){
          console.log("Inicio Sesion");
          this.router.navigateByUrl("/home");
        }
        else{
          console.log("Contraseña incorrecta");
        }
      }
      else{
        console.log("Usuario no registrado");
      }
    });
  }


}
