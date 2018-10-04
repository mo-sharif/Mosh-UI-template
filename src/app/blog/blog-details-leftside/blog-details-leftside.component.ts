import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../shared/services/landing-fix.service';

@Component({
  selector: 'app-blog-details-leftside',
  templateUrl: './blog-details-leftside.component.html',
  styleUrls: ['./blog-details-leftside.component.scss']
})
export class BlogDetailsLeftsideComponent implements OnInit, OnDestroy {

  constructor(
    private fix: LandingFixService
  ) { }

  ngOnInit() {
    this.fix.addFixBlogDetails();
  }

  ngOnDestroy() {
    this.fix.removeFixBlogDetails();
  }
}
