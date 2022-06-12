import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {IUser} from "../interfaces/user.interface";
import {LoginMessageComponent} from "./login-message/login-message.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: IUser;
  loginForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private userService:UserService, private router:Router,public dialog: MatDialog) {
    this.loginForm = this.fb.group({
      email:'',
      password:''
    });
    this.userData={} as IUser;
  }

  openDialog() {
    this.dialog.open(LoginMessageComponent);
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
          this.openDialog();
        }
      }
      else{
        console.log("Usuario no registrado");
        this.openDialog();
      }
    });
  }


}
