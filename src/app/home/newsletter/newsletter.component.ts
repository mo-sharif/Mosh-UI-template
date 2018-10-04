import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  subscribeForm: FormGroup;
  
  constructor(private sf: FormBuilder) { }

  // Email Validator
  ngOnInit() {
  	this.subscribeForm = this.sf.group({
      email: ['', Validators.email],
    })
  }

}
