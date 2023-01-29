import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DescriptionComponent } from './description/description.component';
import { HistoryComponent } from './history/history.component';
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
    /*Ya tiene Desktop*/
    path:'myProfileUpdate',
    component:MyProfileUpdatePersonalComponent
  },
  {
    /*Ya tiene Desktop*/
    path:'personalDetails',
    component:PersonalDetailsComponent
  },
  {
    /*Ya tiene Desktop*/
    path:'home',
    component:HomeComponent
  },
  {
    /*Ya tiene Desktop*/
    path:'noItemCart',
    component:NoItemsCartComponent
  },
  {
    /*Ya tiene Desktop*/
    path:'noHistoryYet',
    component:NoHistoryYetComponent
  },
  {
    /*Ya tiene Desktop*/
    path:'description',
    component:DescriptionComponent
  },
  {
    /*Ya tiene Desktop*/
    path:'Cart',
    component:CartComponent
  },
  {
    /*Ya tiene Desktop*/
    path:'checkout',
    component:CheckoutComponent
  },
  {
    
    path:'history',
    component:HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
