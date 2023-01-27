import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { LoadingComponent } from './loading/loading.component';
import { MyProfileUpdatePersonalComponent } from './my-profile-update-personal/my-profile-update-personal.component';
import { MenuComponent } from './menu/menu.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NoItemsCartComponent } from './no-items-cart/no-items-cart.component';
import { NoHistoryYetComponent } from './no-history-yet/no-history-yet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    LoginSignupComponent,
    LoadingComponent,
    MyProfileUpdatePersonalComponent,
    MenuComponent,
    PersonalDetailsComponent,
    HomeComponent,
    NoItemsCartComponent,
    NoHistoryYetComponent
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
