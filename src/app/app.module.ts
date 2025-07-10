import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClockComponent } from './clock/clock.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { VamshiStoreComponent } from './vamshi-store/vamshi-store.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingComponent } from './shopping/shopping.component';
import { MailComponent } from './mail/mail.component';
import { ImagesComponent } from './images/images.component';
import { WeatherComponent } from './weather/weather.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentIdComponent } from './student-id/student-id.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { AccountsComponent } from './accounts/accounts.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutUsModule } from './about-us/about-us.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    PageNotFoundComponent,
    ClockComponent,
    CalculatorComponent,
    DataBindingComponent,
    DirectivesComponent,
    EmployeeDataComponent,
    VamshiStoreComponent,
    VehiclesComponent,
    ShoppingComponent,
    MailComponent,
    ImagesComponent,
    WeatherComponent,
    CreateVehicleComponent,
    StudentIdComponent,
    CreateStudentComponent,
    StudentFormComponent,
    AccountsComponent,
    VehicleDetailsComponent,
    StudentDetailsComponent,
    CreateAccountsComponent,
    AccountDetailsComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
