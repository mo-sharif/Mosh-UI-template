import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import 'magnific-popup';
declare var $: any;

@Component({
  selector: 'app-intro-two',
  templateUrl: './intro-two.component.html',
  styleUrls: ['./intro-two.component.scss']
})
export class IntroTwoComponent implements AfterViewInit {

  @ViewChild('video') videoElement: ElementRef;	
  
  constructor() { }

  // Magnific Popup 
  ngAfterViewInit(): void {
  	$(this.videoElement.nativeElement).magnificPopup({ 
		    disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false 
    });
  }

}
