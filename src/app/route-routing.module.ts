import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingComponent } from './booking/booking.component';
import { NewhomeComponent } from './newhome/newhome.component';
import { CourtComponent } from './court/court.component';
import { NewloginComponent } from './newlogin/newlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { SignupComponent } from './loginfinal/signup/signup.component';
import { LoginComponent } from './loginfinal/login/login.component';
import { ForgotpasswordComponent } from './loginfinal/forgotpassword/forgotpassword.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [

  {path:'', component:NewhomeComponent},
  {path:'login', component:LoginComponent},
  {path:'booking', component:BookingComponent},
  {path:'newhome', component:NewhomeComponent},
  {path:'court', component:CourtComponent},
  {path:'forgotpassword', component:ForgotpasswordComponent},
  {path:'newlogin', component:NewloginComponent},
  {path:'admindashboard', component:AdmindashboardComponent},
  {path:'userdashboard', component:UserdashboardComponent},
  {path:'header', component: HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'bookingform', component:BookingformComponent},
  {path:'signup', component:SignupComponent},
  {path:'thankyou', component:ThankyouComponent},
  {path:'contact', component:ContactComponent},
  {path:'team', component:TeamComponent},
  {path:'about', component:AboutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
