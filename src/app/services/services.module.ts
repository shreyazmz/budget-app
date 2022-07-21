import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class Webapiservice{
  mainturl:string=" Staging2.hpgamechanger.in/api/abc/"
}

httpHeader = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'
  ,'apitoken':'eaed1dae8614485ea4ca1ffd4f75b595'
  ,'DeviceId':'1'
  ,'AppVersion':'1.2'
  ,'Access-Control-Allow-Origin':'*'
  ,'Access-Control-Allow-Methods':'GET,POST,OPTIONS,DELETE,PUT'
  ,'DeviceToken':'eaed1dae8614485ea4ca1ffd4f75b595' })
};
useridauth:string = "itcapi";
pass:string  = "ITC@12$8)";
//urlmain:string = 'http://localhost:63145/';
urlmain:string  = 'http://15.206.108.144/csoapi/';
httpHeader1 = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'
  ,'Access-Control-Allow-origin':'true'
   })
};



import { ServicesPageRoutingModule } from './services-routing.module';

import { ServicesPage } from './services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesPageRoutingModule
  ],
  declarations: [ServicesPage]
})
export class ServicesPageModule {} 
