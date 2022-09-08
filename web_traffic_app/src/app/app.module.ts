import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './arabic/components/mainpage/mainpage.component';
import { SignupComponent } from './arabic/components/signup/signup.component';
import { SigninComponent } from './arabic/components/signin/signin.component';
import { HomeComponent } from './arabic/components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
