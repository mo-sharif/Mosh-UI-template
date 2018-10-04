import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../../shared/services/landing-fix.service';

@Component({
  selector: 'app-home-two',
  templateUrl: './home-two.component.html',
  styleUrls: ['./home-two.component.scss']
})
export class HomeTwoComponent implements OnInit, OnDestroy {

  constructor(private fix: LandingFixService) { }

  ngOnInit() {
    this.fix.addFixTwo();
  }

  ngOnDestroy() {
    this.fix.removeFixTwo();
  }

}
