import { Component, OnInit } from '@angular/core';
import {LoginMessageComponent} from "../login/login-message/login-message.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(LoginMessageComponent);
  }

  ngOnInit(): void {
  }

}
