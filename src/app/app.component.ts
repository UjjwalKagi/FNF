// import { Component } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  route: any;
  title = 'app';
  // On register link click
  register() {
    // this.router.navigate(['user'], { relativeTo: this.route.parent });
    this.router.navigate(['/thankyou']);
}
}
