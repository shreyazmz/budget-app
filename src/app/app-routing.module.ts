import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class WebapiService {
  //mainturl:string="http://localhost:62095/api/mobile/"
 mainturl:string="Staging2.hpgamechanger.in/api/abc/"
 


import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'home', loadChildren: ()=>import ('./home/home.module').then(m=>m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m=>m.LoginPageModule)
  },
 {
   path: 'registration',
   loadChildren: () => import('./registration/Registration.module').then(m=> m.RegistrationPageModule)
},
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  //{
   // path: 'forgot-password', 
    //loadChildren: () => import('./forgot-password.module')then(m=> m.ForgotPasswordPageModule)
  //},
];

@NgModule({ 
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule] 
})
export class AppRoutingModule {} 
