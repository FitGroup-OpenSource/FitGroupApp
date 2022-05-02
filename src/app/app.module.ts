import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {HomeComponent} from "./home/home.component";
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
