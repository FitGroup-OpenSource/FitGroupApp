import {Component, Input, OnInit} from '@angular/core';
import {IExercise} from "../../model/IExercise";
import {ExercisesServices} from "../../services/exercises.service";
import {formatNumber} from "@angular/common";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-exercise-routine',
  templateUrl: './exercise-routine.component.html',
  styleUrls: ['./exercise-routine.component.css']
})
export class ExerciseRoutineComponent implements OnInit {
  exerciseData: IExercise;
  exerciseId: number | undefined;
  safeSrc: SafeResourceUrl | undefined;
  inputs: any;
  clock:any;
  alarm:any;
  hours:any;
  minutes:any;
  seconds:any;
  repeater:any;
  constructor(private exercisesService: ExercisesServices, private rutaActiva: ActivatedRoute,private sanitizer: DomSanitizer) {
    this.exerciseData={} as IExercise;
    this.exerciseId=this.rutaActiva.snapshot.params['exercise'];
    console.log(this.exerciseId);
    this.getAllExercisesById();
    this.inputs = Array.from(document.getElementsByClassName('number')); /* Busco los inputs */
    this.clock = document.querySelector('.clock'); /* Busco el reloj */
    this.alarm = new Audio('../../../../../assets/routines/icons/alarm.mp3'); /* Genero la alarma */
    // console.log(this.exerciseData);
  }

  ngOnInit(): void {
  }
  // getAllExercises() {
  //   this.exercisesService.getAll().subscribe((response: any) => {
  //     this.dataSource.data = response;
  //   });
  //   console.log(this.dataSource.data);
  // }
  getAllExercisesById() {
    this.exercisesService.getAllById(this.exerciseId).subscribe((response: any) => {
      this.exerciseData=response;
      this.safeSrc= this.sanitizer.bypassSecurityTrustResourceUrl(this.exerciseData.url);
      console.clear();
    });

  }
  startTimer() {
    this.parseTime(); /* Busco y transformo los valores del input a numeros */
    this.setTimer();  /* Seteo el timer visualmente */
    this.countdown()  /* Arranco el contador */
  }
  setTimer() {
    /* Cambio la hora en pantalla */
    this.clock.innerHTML = `<p class="number">${this.hours > 9 ? this.hours : ('0' + this.hours)}</p><span>hs</span><p class="number">${this.minutes > 9 ? this.minutes : ('0' + this.minutes)}</p><span>min</span><p class="number">${this.seconds > 9 ? this.seconds : ('0' + this.seconds)}</p><span>sec</span>`;

    /* Cambio la hora en la pestaña */
    document.title = `${this.hours > 9 ? this.hours : ('0' + this.hours)}:${this.minutes > 9 ? this.minutes : ('0' + this.minutes)}:${this.seconds > 9 ? this.seconds : ('0' + this.seconds)}`;
  }
  /* Funcion para convertir el string del input a numeros */
  parseTime() {

    this.hours = Number(this.inputs[0].value);
    this.minutes = Number(this.inputs[1].value);
    this.seconds = Number(this.inputs[2].value);

  }
  // window.addEventListener('load', () => { /* Espero a que cargue el documento */
  // this.inputs = Array.from(document.getElementsByClassName('number')); /* Busco los inputs */
  // this.clock = document.querySelector('.clock'); /* Busco el reloj */
  // this.alarm = new Audio('../../../../../assets/routines/icons/alarm.mp3'); /* Genero la alarma */
  // )
  /* Funcion que arranca el contador */
  countdown() {
    this.repeater = setInterval(this.runner,1000);
  }
  /* Funcion que cuenta */
  runner() {
    /* Si tengo más de 0 segundos, restá segundos */
    /* Si tengo 0 segundos pero tengo más de 0 minutos, poné segundos en 59 y restale 1 a minutos */
    /* Si tengo 0 segundos, 0 minutos pero tengo más de 0 horas, poné segundos en 59, minutos en 59 y restale 1 a horas */
    /* Sino arranca la alarma */

    if (this.seconds > 0) {
      this.seconds--;
    } else {
      if (this.minutes > 0) {
        this.seconds = 59;
        this.minutes--;
      } else {
        if (this.hours > 0 ) {
          this.seconds = 59;
          this.minutes = 59;
          this.hours--;
        } else {
          this.alarm.play();
        }
      }
    }

    this.setTimer();
  }
  stopTimer(){
    clearInterval(this.repeater);
    location.reload();
  }
}
