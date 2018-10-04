import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

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
