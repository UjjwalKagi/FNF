import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// http module test start
import { HttpModule } from '@angular/http';
// // http module test end
import { AppComponent } from './app.component';
// import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { RouteRoutingModule } from './route-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';

import { BookingComponent } from './booking/booking.component';
import { NewhomeComponent } from './newhome/newhome.component';
import { CourtComponent } from './court/court.component';
import { NewloginComponent } from './newlogin/newlogin.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { SignupComponent } from './loginfinal/signup/signup.component';
import { ForgotpasswordComponent } from './loginfinal/forgotpassword/forgotpassword.component';
import { LoginComponent } from './loginfinal/login/login.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { ForgetPasswordRequestService } from './service/forget-password-request.service';
import { CustomerCreationRequestService } from './service/customer-creation-request.service';
import { BookingCreatioRequestService } from './service/booking-creatio-request.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    NewhomeComponent,
    LoginComponent,
    CourtComponent,
    ForgotpasswordComponent,
    NewloginComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    HeaderComponent,
    FooterComponent,
    BookingformComponent,
    SignupComponent,
    ThankyouComponent,
    ContactComponent,
    TeamComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouteRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
    
  ],
  providers: [
    ForgetPasswordRequestService,
    CustomerCreationRequestService,
    BookingCreatioRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
