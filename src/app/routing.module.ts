import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  HomeComponent } from './home/home.component';
import {MenuComponent} from "./menu/menu.component";
import {RoutinesComponent} from "./routines/routines.component";
<<<<<<< Updated upstream
import {AbsRoutineComponent} from "./routines/types-routines/abs-routine/abs-routine.component";
import {ExerciseSupermanComponent} from "./routines/exercises/exercise-superman/exercise-superman.component";
=======
import {NutritionComponent} from "./nutrition/nutrition.component";
import {PhysicalActivyComponent} from "./home/physical-activy/physical-activy.component";
>>>>>>> Stashed changes

const routes: Routes = [
  { path: 'home',component: HomeComponent},
  { path:'', redirectTo: 'home', pathMatch:'full'},
  {path: 'routines', component: RoutinesComponent},
  {path: 'nutrition', component: NutritionComponent},
  {path: 'home/activity', component:PhysicalActivyComponent }

  // { path: '**', component: PageNotFoundComponent }
  { path: 'routines', component: RoutinesComponent},
  { path: 'abs-routine', component: AbsRoutineComponent},
  { path: 'exercise-superman', component: ExerciseSupermanComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
