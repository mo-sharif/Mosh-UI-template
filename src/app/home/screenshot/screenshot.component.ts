import { Component } from '@angular/core';

@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.scss']
})
export class ScreenshotComponent {
    
    constructor() { }
    
    // Carousel Images  
	public carouselImages = [{
	    image: 'assets/images/app/1.jpg',
	  }, {
	    image: 'assets/images/app/2.jpg',
	  }, {
	    image: 'assets/images/app/3.jpg',
	  }, {
	    image: 'assets/images/app/4.jpg',
	  }, {
	    image: 'assets/images/app/5.jpg',
	  }, {
	    image: 'assets/images/app/6.jpg',
      }, {
	    image: 'assets/images/app/7.jpg',
	  }, {
	    image: 'assets/images/app/8.jpg',
	  }, {
	    image: 'assets/images/app/9.jpg',
	  }, {
	    image: 'assets/images/app/10.jpg',
	  }, {
	    image: 'assets/images/app/11.jpg',
	  }, {
	    image: 'assets/images/app/12.jpg',
    }]
  
	// Carousel Options
	public carouselOptions: any ={
	    loop:true,
	    margin:30,
	    nav:false,
	    dots:false,
	    center:true,
	    autoplay: true,
	    autoplayTimeout: 8000,
	    responsive:{
	        0:{
	            items:2,
	        },
	        767:{
	            items:2,
	        },
	        768:{
	            items:3,
	        },
	        992:{
	            items:4,
	        },
	        1200:{
	            items:5
	        }
	    }
	}


}
