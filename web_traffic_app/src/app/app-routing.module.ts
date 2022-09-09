import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './arabic/components/mainpage/mainpage.component';
import { SignupandsigninComponent } from './arabic/components/signupandsignin/signupandsignin.component';

const routes: Routes = [
  {path:'' , component:MainpageComponent},
  {path:'authentication' , component:SignupandsigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
