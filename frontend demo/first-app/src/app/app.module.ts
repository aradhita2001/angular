import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
// import { AppRoutingModule } from './app-routing.module';

import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Comp2Component } from './comp2/comp2.component';
import { SwitchComponent } from './switch/switch.component';
import { FormsTemplateComponent } from './forms-template/forms-template.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { ReactiveFormPracticeComponent } from './reactive-form-practice/reactive-form-practice.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Page1Component } from './page1/page1.component';
import { PageWithArrayComponent } from './page-with-array/page-with-array.component';
import { ArrayDetailsComponent } from './array-details/array-details.component';
import { ObservableComponent } from './observable/observable.component';
import { ArrayDetailsMultipleComponent } from './array-details-multiple/array-details-multiple.component';
import { QueryParamCallerComponent } from './query-param-caller/query-param-caller.component';
import { QueryParamReceiverComponent } from './query-param-receiver/query-param-receiver.component';
import { AppRoutingModule } from './app-routing.module';
import { MoviesService } from './services/movies.service';
import { PostService } from './services/post.service';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Comp2Component,
    SwitchComponent,
    FormsTemplateComponent,
    FormReactiveComponent,
    ReactiveFormPracticeComponent,
    HomeComponent,
    ErrorComponent,
    WelcomeComponent,
    Page1Component,
    PageWithArrayComponent,
    ArrayDetailsComponent,
    ObservableComponent,
    ArrayDetailsMultipleComponent,
    QueryParamCallerComponent,
    QueryParamReceiverComponent,
    PostListComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // AppRoutingModule,
    
    AppRoutingModule
    
  ],
  providers: [MoviesService , PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
