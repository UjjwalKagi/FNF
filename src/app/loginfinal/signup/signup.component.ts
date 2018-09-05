import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerCreationRequestService } from '../../service/customer-creation-request.service';
// import { error } from 'util';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  customercreationForms: FormGroup;
  data:any;
  constructor(private router: Router,private _customercreation:CustomerCreationRequestService) { }

  ngOnInit() {
    this.customercreationForms=new FormGroup({
      Fullname:new FormControl,
      Email:new FormControl,
      Password:new FormControl,
      PhoneNo:new FormControl,
      Longitude:new FormControl,
      Latitude:new FormControl
    })
  }
  customercreationForm(){
    console.log('Form:',this.customercreationForms);
    
    this._customercreation.customercreation(this.customercreationForms.value).subscribe(data =>{
      console.log('Created user data',data);
      alert("Customer Created ,check your email for further process!");
      this.router.navigate(['./thankyou']);
    },
    error=>{
      console.log('Create user error',error);
      alert("Failed To Create Customer,Try Again");
      // this.router.navigate(['/thankyou']);
    });
    }
  
}
