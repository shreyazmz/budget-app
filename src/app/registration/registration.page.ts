import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../api/webapi.service';
import { AlertController,LoadingController } from '@ionic/angular';
import {Router} from '@angular/router';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(private webapiService: WebapiService,private router: Router,public loadingController:LoadingController: LoadingController,public alertController: AlertController) { }
  public notilist: any;
  ngOnInit(){
    if(localStorage.getItem("data")===null||localStorage.getItem("data")===undefined)
    {
      this.router.navigate([' ']);
      return;
    }
    let regis={
      "Phone": localStorage.getItem("mobile"),
      "code":1,
    };
    this.getRegistration(reg)
    
    }

  }

  ngOnInit() {
  }

}
