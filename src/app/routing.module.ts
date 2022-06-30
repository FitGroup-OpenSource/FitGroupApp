import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RoutinesComponent} from "./routines/pages/routines/routines.component";
import {AbsRoutineComponent} from "./routines/pages/types-routines/abs-routine/abs-routine.component";
import {ExerciseRoutineComponent} from "./routines/exercises/pages/exercise-routine/exercise-routine.component";
import {PhysicalActivityComponent} from "./home/physical-activity/physical-activity.component";
import {LoginComponent} from "./security/pages/login/login.component";
import {RegisterComponent} from "./security/pages/register/register.component";
import {NutritionComponent} from "./nutrition/nutrition.component";
import {FoodPreferenceComponent} from "./nutrition/food-preference/food-preference.component";
import {BMIComponent} from "./nutrition/bmi/bmi.component";
import {ScheduleComponent} from "./nutrition/schedule/pages/schedule-nutrition/schedule.component";


const routes: Routes = [
	{path: 'home', component: HomeComponent},
	{path: '', redirectTo: '/login', pathMatch: 'full'},
	// { path: '**', component: PageNotFoundComponent }
	{path: 'routines', component: RoutinesComponent},
	{path: 'abs-routine', component: AbsRoutineComponent},
	{path: 'physical-activity', component: PhysicalActivityComponent},
	{path: 'nutrition', component: NutritionComponent},
	{path: 'food-preference', component: FoodPreferenceComponent},
	{path: 'bmi', component: BMIComponent},
	{path: 'schedule/nutricional-plan/:account', component: ScheduleComponent},
	{path: 'exercise-routine/:exercise', component: ExerciseRoutineComponent},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent}


];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class RoutingModule {
}