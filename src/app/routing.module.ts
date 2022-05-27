import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  HomeComponent } from './home/home.component';
import {RoutinesComponent} from "./routines/routines.component";
import {AbsRoutineComponent} from "./routines/types-routines/abs-routine/abs-routine.component";
import {ExerciseSupermanComponent} from "./routines/exercises/exercise-superman/exercise-superman.component";
import {PhysicalActivityComponent} from "./home/physical-activity/physical-activity.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  { path: 'home',component: HomeComponent},
  { path:'', redirectTo: '/home', pathMatch:'full'},
  // { path: '**', component: PageNotFoundComponent }
  { path: 'routines', component: RoutinesComponent},
  { path: 'abs-routine', component: AbsRoutineComponent},
  { path: 'exercise-superman', component: ExerciseSupermanComponent},
  { path: 'physical-activity', component: PhysicalActivityComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
