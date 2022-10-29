import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './page/page.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SqeareComponent } from './sqeare/sqeare.component';
import { PowerComponent } from './power/power.component';
import { EventregComponent } from './eventreg/eventreg.component';
import { EmployeregeComponent } from './employerege/employerege.component';
import { GpayComponent } from './gpay/gpay.component';
import { BankComponent } from './bank/bank.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import{HttpClientModule} from '@angular/common/http';
import { TypicodeComponent } from './typicode/typicode.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { ViewComponent } from './view/view.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageComponent,
    InterpolationComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    CalculatorComponent,
    RectangleComponent,
    SqeareComponent,
    PowerComponent,
    EventregComponent,
    EmployeregeComponent,
    GpayComponent,
    BankComponent,
    VehicleComponent,
    TypicodeComponent,
    FlipkartComponent,
    ViewComponent,
    CreateaccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
