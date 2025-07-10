import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutProductsComponent } from './about-products/about-products.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    AboutCompanyComponent,
    AboutProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutUsModule { }
