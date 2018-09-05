import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { CustomersigninService } from '../../service/customersignin.service';
import { error } from 'util';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // _demo: any;
  constructor(private _customersignin:CustomersigninService) { }
  customersigninForms: FormGroup;
  data:any;
  ngOnInit() {
    this.customersigninForms=new FormGroup({
      Email:new FormControl(),
      Password:new FormControl()
    })
  }
  customersigninForm(){
    console.log('Form:',this.customersigninForms);
    
    this._customersignin.customersignin(this.customersigninForms.value).subscribe(data =>{
      console.log('Sign In Successful',data);
      alert("Enjoy Futsal Nepal ");
      // this.router.navigate(['./thankyou']);
    },
    error=>{
      console.log('Sign In Error',error);
      alert("Failed To Sign In,Check Credentials & Try Again");
    });
    }
  

}
