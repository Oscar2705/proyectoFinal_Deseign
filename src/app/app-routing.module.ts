import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyProfileUpdatePersonalComponent } from './my-profile-update-personal/my-profile-update-personal.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    //Me redirecciona a home cuando este vacio
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'sign-up',
    component:SignUpComponent
  },
  // {
  //   path:'myProfileUpdate',
  //   component:MyProfileUpdatePersonalComponent
  // },
  // {
  //   path:'personalDetails',
  //   component:PersonalDetailsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
