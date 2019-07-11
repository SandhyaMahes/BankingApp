import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { UserportalComponent } from './userportal/userportal.component';
import { WithdrawComponent } from './userportal/withdraw/withdraw.component';
import { DepositComponent } from './userportal/deposit/deposit.component';
import { CheckbalanceComponent } from './userportal/checkbalance/checkbalance.component';


const routes: Routes = [
  {path:'home' ,component:HomeComponent},
  {path:'about' ,component:AboutComponent},
  {path:'contact' ,component:ContactComponent},
  {path:'main' ,component:MainComponent},
  {path:'Register' ,component:RegisterComponent},
  {path:'login' ,component:LoginComponent},
  {path:'userportal' ,component:UserportalComponent,
   children:[
    
     {path:'withdraw' ,component:WithdrawComponent},
     {path:'deposit' ,component:DepositComponent},
     {path:'checkbalance' ,component:CheckbalanceComponent},
     { path: '**', redirectTo: '' },
   ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
