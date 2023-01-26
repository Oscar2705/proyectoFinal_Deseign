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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    LoginSignupComponent,
    LoadingComponent,
    MyProfileUpdatePersonalComponent,
    MenuComponent,
    PersonalDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
