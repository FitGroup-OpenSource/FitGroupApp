import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BMIComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
