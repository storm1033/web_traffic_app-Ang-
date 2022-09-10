import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './arabic/components/mainpage/mainpage.component';
import { SignupComponent } from './arabic/components/signup/signup.component';
import { SigninComponent } from './arabic/components/signin/signin.component';
import { HomeComponent } from './arabic/components/home/home.component';
import { VideosComponent } from './arabic/components/videos/videos.component';
import { CoursesComponent } from './arabic/components/courses/courses.component';
import { ChaptersComponent } from './arabic/components/chapters/chapters.component';
import { CourseComponent } from './arabic/components/course/course.component';
import { SignupandsigninComponent } from './arabic/components/signupandsignin/signupandsignin.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    VideosComponent,
    CoursesComponent,
    ChaptersComponent,
    CourseComponent,
    SignupandsigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
