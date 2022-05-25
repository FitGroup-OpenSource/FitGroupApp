import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  HomeComponent } from './home/home.component';
import {RoutinesComponent} from "./routines/routines.component";
import {AbsRoutineComponent} from "./routines/types-routines/abs-routine/abs-routine.component";
import {ExerciseSupermanComponent} from "./routines/exercises/exercise-superman/exercise-superman.component";
import {PhysicalActivityComponent} from "./home/physical-activity/physical-activity.component";
import {NutritionComponent} from "./nutrition/nutrition.component";
import {FoodPreferenceComponent} from "./nutrition/food-preference/food-preference.component";
import {BMIComponent} from "./nutrition/bmi/bmi.component";
import {ScheduleComponent} from "./nutrition/schedule/schedule.component";


const routes: Routes = [
  { path: 'home',component: HomeComponent},
  { path:'', redirectTo: '/home', pathMatch:'full'},
  // { path: '**', component: PageNotFoundComponent }
  { path: 'routines', component: RoutinesComponent},
  { path: 'abs-routine', component: AbsRoutineComponent},
  { path: 'exercise-superman', component: ExerciseSupermanComponent},
  { path: 'physical-activity', component: PhysicalActivityComponent},
  { path: 'nutrition', component: NutritionComponent},
  { path: 'food-preference', component: FoodPreferenceComponent},
  { path: 'bmi', component: BMIComponent},
  { path: 'schedule', component: ScheduleComponent} 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
