import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class LandingFixService {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }
  
 // Add or Remove class

  // Landing page
  public addFix() {
     this.document.body.classList.add('landing-page');
  }

  public removeFix() {
     this.document.body.classList.remove('landing-page');
  }
 
  // Home Page One
  public addFixOne() {
     this.document.body.classList.add('home-style-one');
  }

  public removeFixOne() {
     this.document.body.classList.remove('home-style-one');
  }

  // Home Page Two
  public addFixTwo() {
     this.document.body.classList.add('home-style-two');
  }

  public removeFixTwo() {
     this.document.body.classList.remove('home-style-two');
  }

  // Home Page Three
  public addFixThree() {
     this.document.body.classList.add('home-style');
     this.document.body.classList.add('three');
  }

  public removeFixThree() {
     this.document.body.classList.remove('home-style');
     this.document.body.classList.remove('three');
  }

  // Blog Page
  public addFixBlog() {
     this.document.body.classList.add('blog-page');
  }

  public removeFixBlog() {
     this.document.body.classList.remove('blog-page');
  }

  // Blog Page Details
  public addFixBlogDetails() {
     this.document.body.classList.add('blog-page');
     this.document.body.classList.add('blog-detail');
  }

  public removeFixBlogDetails() {
     this.document.body.classList.remove('blog-page');
     this.document.body.classList.remove('blog-detail');
  }




}
