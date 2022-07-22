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
public name:any;
  address: any;
  email: any;
  password:any;
  city:any;
  mobile:any;

  constructor(private webapiService: WebapiService,private router: Router,public loadingController:LoadingController: LoadingController,public alertController: AlertController) { }
  public notilist: any;
  ngOnInit(){
   
  }

  submit(){
    let data={
      "name":this.name,
      "Password":this.password,
      "Email":this.email,
      "Address":this.address,
      "City":this.city,
      "Mobile":this.mobile,
    }
  this.registration(data)  
  }

  registration(data){
    const loading =await  this.loadingController.create({
      cssClass:"custom-alertDanger1",
      message: 'Please Wait....',
   
    });
    await loading.present();

    this.webapiService.Registration(data).subscribe(res => {
      console.log(res);
      if (res.hasError==false){
     
      loading.dismiss();
      //this.router.navigate(['dashboard']); 

    
    }else{
      loading.dismiss();
      console.log(res);

      if(res.id==="0"){

      }else{
      this.router.navigate(['dashboard']);
      }
     // this.showAlert(res.errors[0].errorMessage );

    }
    }, error => {
      console.log(error);
      loading.dismiss();
    });

  }
 
} 
