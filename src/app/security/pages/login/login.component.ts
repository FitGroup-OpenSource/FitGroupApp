import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {IUser} from "../../model/IUser";
import {LoginMessageComponent} from "./login-message/login-message.component";
import {MatDialog} from "@angular/material/dialog";
import {CookieService} from "ngx-cookie-service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: IUser;
  cookieValue:string;
  user:any;
  loginForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private userService:UserService, private router:Router,public dialog: MatDialog,private cookieService: CookieService) {
    this.loginForm = this.fb.group({
      username:'',
      password:''
    });
    this.userData={} as IUser;
    this.cookieValue = this.cookieService.get('JSESSIONID');

  }

  openDialog() {
    this.dialog.open(LoginMessageComponent);
  }

  ngOnInit(): void {
    console.clear();
    localStorage.clear();
  }

  submit() {
    this.userService.loginUser(this.loginForm.getRawValue())
        .subscribe(response=>
        {
          console.clear();
          this.user=response;
          console.log(response);
          localStorage.setItem('Token',this.user.token);
          this.router.navigate(['home'])
        });
  }


}
