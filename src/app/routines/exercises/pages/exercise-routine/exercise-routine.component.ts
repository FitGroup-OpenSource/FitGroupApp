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
  constructor(private exercisesService: ExercisesServices, private rutaActiva: ActivatedRoute,private sanitizer: DomSanitizer) {
    this.exerciseData={} as IExercise;
    this.exerciseId=this.rutaActiva.snapshot.params['exercise'];
    console.log(this.exerciseId);
    this.getAllExercisesById();

    console.log(this.exerciseData);
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
      this.exerciseData=response[0];
      this.safeSrc= this.sanitizer.bypassSecurityTrustResourceUrl(this.exerciseData.url);
    });


  }

}
