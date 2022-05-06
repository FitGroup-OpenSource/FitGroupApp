import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  HomeComponent } from './home/home.component';
import {MenuComponent} from "./menu/menu.component";
import {NutritionComponent} from "./nutrition/nutrition.component";
import {PhysicalActivityComponent} from "./home/physical-activity/physical-activity.component";

const routes: Routes = [
  { path: 'home',component: HomeComponent},
  { path:'', redirectTo: '/menu', pathMatch:'full'},
  {path: 'menu', component: MenuComponent},
  { path:'', redirectTo: 'home', pathMatch:'full'},
  { path:'', redirectTo: 'home', pathMatch:'full'},
  {path: 'nutrition', component: NutritionComponent},
  {path: 'home/activity', component:PhysicalActivityComponent }
  // { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
