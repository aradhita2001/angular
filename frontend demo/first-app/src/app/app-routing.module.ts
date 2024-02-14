import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArrayDetailsMultipleComponent } from './array-details-multiple/array-details-multiple.component';
import { ArrayDetailsComponent } from './array-details/array-details.component';
import { PageWithArrayComponent } from './page-with-array/page-with-array.component';
import { Page1Component } from './page1/page1.component';
import { QueryParamReceiverComponent } from './query-param-receiver/query-param-receiver.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path : "page1",
    component : Page1Component
  },
  {
    path : 'array',
    component: PageWithArrayComponent
  },
  {
    path: 'array/:id',
    component: ArrayDetailsComponent
  },
  {
    path: 'array/:id/:name',
    component: ArrayDetailsMultipleComponent
  },
  {
    path: 'query',
    component : QueryParamReceiverComponent
  },
  {
    path: 'posts',
    component : PostListComponent
  },
  {
    path: 'posts/:i',
    component : PostDetailsComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
