import { Component, createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BankComponent } from './bank/bank.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeregeComponent } from './employerege/employerege.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { EventregComponent } from './eventreg/eventreg.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GpayComponent } from './gpay/gpay.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { NotifyGuard } from './notify.guard';
import { PageComponent } from './page/page.component';
import { PowerComponent } from './power/power.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SqeareComponent } from './sqeare/sqeare.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { TypicodeComponent } from './typicode/typicode.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard', component:DashboardComponent,canActivate:[AuthGuard], 
    children:
    [
    {path:'calculator', component:CalculatorComponent},
    {path:"interpolation",component:InterpolationComponent},
    {path:"twowaybinding", component:TwowaybindingComponent},
    {path:"eventbinding",component:EventbindingComponent},
    {path:"rectangle", component:RectangleComponent},
    {path:"sqeare", component:SqeareComponent},
    {path:"power", component:PowerComponent},
    {path:"eventreg", component:EventregComponent},
    {path:"employerege",component:EmployeregeComponent},
    {path:"gpay",component:GpayComponent},
    {path:"bank",component:BankComponent},
    {path:"vehicle", component: VehicleComponent},
    {path:"typicode", component: TypicodeComponent},
    {path:"flipkart", component:FlipkartComponent},
    {path:"view/:id", component:ViewComponent},
    {path:"createaccount", component:CreateaccountComponent,canActivate:[NotifyGuard]}
  ]
  },
  {path:'', component:LoginComponent},
  {path:'**',component:PageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
