import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
   // Blog Carousel Options
   public blogCarousel: any ={
    loop:true,
    margin:30,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1,
            margin:5,
            nav:false,
        },
        600:{
            items:1,
            margin:0,
            nav:false,
        },
        768:{
            items:2,
        },
        1000:{
            items:2
        }
    }
}
    constructor(private http: HttpClient) { }
    /*
    blog$: Observable<any[]>;

    getPosts(): Observable<any[]>{
        return this.http.get<any[]>('https://www.mosh-media.com/wp-json/wp/v2/posts?_embed', {
            params: {
              per_page: '4'
            }
          });

    }*/
    blog$
 async ngOnInit() {
    let data = await fetch('https://www.mosh-media.com/wp-json/wp/v2/posts?per_page=4&_embed');
    let json = await data.json();
    return this.blog$ = json; 
  }


}
