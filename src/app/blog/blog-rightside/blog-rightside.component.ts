import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../shared/services/landing-fix.service';

@Component({
  selector: 'app-blog-rightside',
  templateUrl: './blog-rightside.component.html',
  styleUrls: ['./blog-rightside.component.scss']
})
export class BlogRightsideComponent implements OnInit, OnDestroy {

  constructor(
    private fix: LandingFixService
  ) { }

  ngOnInit() {
    this.fix.addFixBlog();
  }

  ngOnDestroy() {
    this.fix.removeFixBlog();
  }
}
