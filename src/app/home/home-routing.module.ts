import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeOneComponent } from './versions/home-one/home-one.component';
import { HomeTwoComponent } from './versions/home-two/home-two.component';
import { HomeThreeComponent } from './versions/home-three/home-three.component';

// Routes
const routes: Routes = [
  { 
    path: 'one',
    component: HomeOneComponent
  },
  { 
    path: 'two',
    component: HomeTwoComponent 
  },
  { 
    path: 'three',
    component: HomeThreeComponent 
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
