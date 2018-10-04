import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../../shared/services/landing-fix.service';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit, OnDestroy {
  
  constructor(private fix: LandingFixService) { }

  ngOnInit() {
    this.fix.addFixOne();
  }

  ngOnDestroy() {
    this.fix.removeFixOne();
  }

}
