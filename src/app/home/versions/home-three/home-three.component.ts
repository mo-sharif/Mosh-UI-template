import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../../shared/services/landing-fix.service';

@Component({
  selector: 'app-home-three',
  templateUrl: './home-three.component.html',
  styleUrls: ['./home-three.component.scss']
})
export class HomeThreeComponent implements OnInit, OnDestroy {

  constructor(private fix: LandingFixService) { }

  ngOnInit() {
    this.fix.addFixThree();
  }

  ngOnDestroy() {
    this.fix.removeFixThree();
  }

}
