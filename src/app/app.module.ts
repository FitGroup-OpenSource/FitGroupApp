import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeComponent} from "./home/home.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import { RoutinesComponent } from './routines/routines.component';
import {MatCardModule} from "@angular/material/card";
import { AbsRoutineComponent } from './routines/types-routines/abs-routine/abs-routine.component';
import {MatListModule} from "@angular/material/list";
import { ExerciseSupermanComponent } from './routines/exercises/exercise-superman/exercise-superman.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {PhysicalActivityComponent} from "./home/physical-activity/physical-activity.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoutinesComponent,
    AbsRoutineComponent,
    ExerciseSupermanComponent,
      PhysicalActivityComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
