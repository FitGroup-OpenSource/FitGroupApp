import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ExerciseRoutineComponent} from "../../../exercises/pages/exercise-routine/exercise-routine.component";
import {ExercisesServices} from "../../../exercises/services/exercises.service";
import {IExercise} from "../../../exercises/model/IExercise";

@Component({
  selector: 'app-abs-routine',
  templateUrl: './abs-routine.component.html',
  styleUrls: ['./abs-routine.component.css']
})
export class AbsRoutineComponent implements OnInit {

  constructor(private exercisesService: ExercisesServices) {
    this.exerciseData1={} as IExercise;
    this.exerciseData2={} as IExercise;
    this.exerciseData3={} as IExercise;
    this.exerciseId1=this.getRandomArbitrary(1,14);
    this.exerciseId2=this.getRandomArbitrary(1,14);
    this.exerciseId3=this.getRandomArbitrary(1,14);
    this.getAllExercisesById();
    console.clear();
  }
  exerciseData1: IExercise;
  exerciseData2: IExercise;
  exerciseData3: IExercise;
  exerciseId1:number;
  exerciseId2:number;
  exerciseId3:number;
  ngOnInit() {
  }

  getRandomArbitrary(min: any, max: any) {
    return Math.round(Math.random() * (max - min) + min);
  }
  getAllExercisesById() {
    this.exercisesService.getAllById(this.exerciseId1).subscribe((response: any) => {
      this.exerciseData1=response;
    });
    this.exercisesService.getAllById(this.exerciseId2).subscribe((response: any) => {
      this.exerciseData2=response;
    });
    this.exercisesService.getAllById(this.exerciseId3).subscribe((response: any) => {
      this.exerciseData3=response;
    });

  }
}
