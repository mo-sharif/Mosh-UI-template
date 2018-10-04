import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  
  // variable
  show: boolean;

  constructor() {
  // initialize variable value
   this.show = false;
  }
  
  // click event function toggle
  password() {
   this.show = !this.show;
  }
  
  ngOnInit() {
  }

}
