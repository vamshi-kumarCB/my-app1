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
import { VamshiStoreComponent } from './vamshi-store/vamshi-store.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { MailComponent } from './mail/mail.component';
import { ImagesComponent } from './images/images.component';
import { WeatherComponent } from './weather/weather.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentIdComponent } from './student-id/student-id.component';
import { CreateStudentComponent } from './create-student/create-student.component';


const routes: Routes = [
  
  {path: '',component:LoginComponent},   //Default Routing
  {path: 'dashboard',component:DashboardComponent,children:[
    {path: 'home',component:HomeComponent},
    {path: 'clock',component:ClockComponent}, //child routing
    {path: 'calculator',component:CalculatorComponent},
    {path: 'data-binding',component:DataBindingComponent},
    {path: 'directives',component:DirectivesComponent}, 
    {path: 'employee-data',component:EmployeeDataComponent},
    {path: 'vamshi-store',component:VamshiStoreComponent},
    {path: 'vehicles',component:VehiclesComponent},
     {path: 'shopping',component:ShoppingComponent},
      {path: 'mail',component:MailComponent},
       {path: 'images',component:ImagesComponent},
       {path: 'weather',component:WeatherComponent},
       {path: 'create-vehicle',component:CreateVehicleComponent},
       {path: 'student-id',component:StudentIdComponent},
        {path: 'create-student',component:CreateStudentComponent},


  ]}, //Parent Routing
  {path:'**',component:PageNotFoundComponent}, //wild card routing or error routing
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
