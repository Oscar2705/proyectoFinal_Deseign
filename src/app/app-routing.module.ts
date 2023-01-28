import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyProfileUpdatePersonalComponent } from './my-profile-update-personal/my-profile-update-personal.component';
import { NoHistoryYetComponent } from './no-history-yet/no-history-yet.component';
import { NoItemsCartComponent } from './no-items-cart/no-items-cart.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  // {
  //   //Me redirecciona a home cuando este vacio
  //   path:'',
  //   pathMatch:'full',
  //   redirectTo:'login'
  // },
  // {
  //   path:'login',
  //   component:LoginComponent
  // },
  // {
  //   path:'sign-up',
  //   component:SignUpComponent
  // },
  {
    path:'myProfileUpdate',
    component:MyProfileUpdatePersonalComponent
  },
  {
    path:'personalDetails',
    component:PersonalDetailsComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'noItemCart',
    component:NoItemsCartComponent
  },
  {
    path:'noHistoryYet',
    component:NoHistoryYetComponent
  },
  {
    path:'description',
    component:DescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
