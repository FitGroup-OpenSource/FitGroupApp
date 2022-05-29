import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  HomeComponent } from './home/home.component';
import {RoutinesComponent} from "./routines/pages/routines/routines.component";
import {AbsRoutineComponent} from "./routines/pages/types-routines/abs-routine/abs-routine.component";
import {ExerciseRoutineComponent} from "./routines/exercises/pages/exercise-routine/exercise-routine.component";
import {PhysicalActivityComponent} from "./home/physical-activity/physical-activity.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  { path: 'home',component: HomeComponent},
  { path:'', redirectTo: '/login', pathMatch:'full'},
  // { path: '**', component: PageNotFoundComponent }
  { path: 'routines', component: RoutinesComponent},
  { path: 'abs-routine', component: AbsRoutineComponent},
  { path: 'exercise-routine/:exercise', component: ExerciseRoutineComponent},
  { path: 'physical-activity', component: PhysicalActivityComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
