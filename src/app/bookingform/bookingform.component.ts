import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { BookingCreatioRequestService } from '../service/booking-creatio-request.service';
import { error } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {

   // _demo: any;
   constructor(private router: Router,private _bookingcreation:BookingCreatioRequestService) { }
   bookingcreationForms: FormGroup;
   data:any;
  ngOnInit() {
    this.bookingcreationForms=new FormGroup({
      Court:new FormControl(),
      Date:new FormControl(),
      Timeandprice:new FormControl()
    })
  }
  forgetpasswordForm(){
    console.log('Form:',this.bookingcreationForms);
    
    this._bookingcreation.bookingcreation(this.bookingcreationForms.value).subscribe(data =>{
      console.log('Booking Successful',data);
      alert("Booking Successful,Enjoy");
      // this.router.navigate(['./thankyou']);
    },
    error=>{
      console.log('Booking Problem',error);
      alert("Failed To Book,Try Again");
    });
}
}
