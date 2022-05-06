import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.css']
})
export class RoutinesComponent implements OnInit {

<<<<<<< Updated upstream

  breakpoint: number | undefined ;

  constructor() {
  }

  ngOnInit():void {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 2;
  }

  onResize({event}: { event: any }) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 2;
=======
  constructor() { }

  ngOnInit(): void {
>>>>>>> Stashed changes
  }

}
