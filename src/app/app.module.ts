import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeComponent} from "./home/home.component";
import {NutritionComponent} from "./nutrition/nutrition.component";

import {MatToolbarModule} from "@angular/material/toolbar";
import { RoutinesComponent } from './routines/pages/routines/routines.component';
import {MatCardModule} from "@angular/material/card";
import { AbsRoutineComponent } from './routines/pages/types-routines/abs-routine/abs-routine.component';
import {MatListModule} from "@angular/material/list";
import { ExerciseRoutineComponent } from './routines/exercises/pages/exercise-routine/exercise-routine.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {PhysicalActivityComponent} from "./home/physical-activity/physical-activity.component";
import {FooterComponent} from "./footer/footer.component";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";
import { FoodPreferenceComponent } from './nutrition/food-preference/food-preference.component';
import { BMIComponent } from './nutrition/bmi/bmi.component';
import { ScheduleComponent } from './nutrition/schedule/schedule.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoutinesComponent,
    AbsRoutineComponent,
    ExerciseRoutineComponent,
    PhysicalActivityComponent,
    FooterComponent,
    NutritionComponent,
    FoodPreferenceComponent,
    BMIComponent,
    ScheduleComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
