import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../shared/services/landing-fix.service';

@Component({
  selector: 'app-blog-details-rightside',
  templateUrl: './blog-details-rightside.component.html',
  styleUrls: ['./blog-details-rightside.component.scss']
})
export class BlogDetailsRightsideComponent implements OnInit, OnDestroy {

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
