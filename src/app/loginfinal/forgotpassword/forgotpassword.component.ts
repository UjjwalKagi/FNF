import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ForgetPasswordRequestService } from '../../service/forget-password-request.service';
import { error } from 'util';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  // _demo: any;
  constructor(private router: Router,private _forgetpassword:ForgetPasswordRequestService) { }
  forgetpasswordForms: FormGroup;
  data:any;
  ngOnInit() {
    this.forgetpasswordForms=new FormGroup({
      Email:new FormControl()
      // firstName:new FormControl(),
      // lastName:new FormControl()
    })
  }
  forgetpasswordForm(){
    console.log('Form:',this.forgetpasswordForms);
    
    this._forgetpassword.forgetpassword(this.forgetpasswordForms.value).subscribe(data =>{
      console.log('Successully sent via email',data);
      alert("Email sent ,check your inbox!");
      this.router.navigate(['./thankyou']);
    },
    error=>{
      console.log('Sending Problem',error);
      alert("Failed To Send Email,Try Again");
    });
    }
  
  
}
