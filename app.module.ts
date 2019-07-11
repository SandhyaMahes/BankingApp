import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CheckbalanceComponent } from './userportal/checkbalance/checkbalance.component';
import { ContactComponent } from './contact/contact.component';
import { DepositComponent } from './userportal/deposit/deposit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { UserportalComponent } from './userportal/userportal.component';
import { WithdrawComponent } from './userportal/withdraw/withdraw.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CheckbalanceComponent,
    ContactComponent,
    DepositComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    MainComponent,
    RegisterComponent,
    UserportalComponent,
    WithdrawComponent
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
