import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.scss']
})
export class ComingsoonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	  $.getScript('./assets/js/timer.js');
  }

}
