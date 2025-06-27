import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClockComponent } from './clock/clock.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';


const routes: Routes = [
  
  {path: '',component:LoginComponent},   //Default Routing
  {path: 'dashboard',component:DashboardComponent,children:[
    {path: 'home',component:HomeComponent},
    {path: 'clock',component:ClockComponent}, //child routing
    {path: 'calculator',component:CalculatorComponent},
    {path: 'data-binding',component:DataBindingComponent},
    {path: 'directives',component:DirectivesComponent},
    {path: 'employee-data',component:EmployeeDataComponent},


  ]}, //Parent Routing
  {path:'**',component:PageNotFoundComponent}, //wild card routing or error routing

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
