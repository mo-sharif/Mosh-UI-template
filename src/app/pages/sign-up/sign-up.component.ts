import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

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
