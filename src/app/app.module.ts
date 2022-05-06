import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from "./menu/menu.component";
import {HomeComponent} from "./home/home.component";
import {MatToolbarModule} from "@angular/material/toolbar";
<<<<<<< Updated upstream
import { RoutinesComponent } from './routines/routines.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import { AbsRoutineComponent } from './routines/types-routines/abs-routine/abs-routine.component';
import {MatListModule} from "@angular/material/list";
import { ExerciseSupermanComponent } from './routines/exercises/exercise-superman/exercise-superman.component';

=======
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {NutritionComponent} from "./nutrition/nutrition.component";
import {RoutinesComponent} from "./routines/routines.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {PhysicalActivyComponent} from "./home/physical-activy/physical-activy.component";
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
<<<<<<< Updated upstream
    RoutinesComponent,
    AbsRoutineComponent,
    ExerciseSupermanComponent
=======
    NutritionComponent,
    RoutinesComponent,
    PhysicalActivyComponent
>>>>>>> Stashed changes
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
<<<<<<< Updated upstream
    MatGridListModule,
    MatCardModule,
    MatListModule,
=======
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
