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
  public name:any="";
  
  public  address: any="";
   
  public email: any="";
  
  public  password:any="";
   
  public city:any="";
  
  public  mobile:any="";
  
    constructor(private webapiService: WebapiService,private router: Router,public loadingController:LoadingController,LoadingController:LoadingController, public alertController: AlertController) { }
    public notilist: any;
    ngOnInit(){
     
    }
  
    async showAlert(msg:any) {
      const alert = await this.alertController.create({
        header: 'Error',
    cssClass:"custom-alertDanger1",
        message: msg,
        buttons: ['OK']
      });
  
      await alert.present();
    }
    submit(){
     
      if(this.name===""){
this.showAlert("Please enter name");
return false;      
}
if(this.password===""){
  this.showAlert("Please enter password");
  return false;      
  }
  
  debugger;
  var check=this.validateEmail(this.email)
  if(check===false){
    this.showAlert("Please enter valid email id ");
    return false;      
  
  }
  if(this.address===""){
    this.showAlert("Address field cannot be empty");
    return false;    
  }
  if(this.city===""){
    this.showAlert("City field cannot be empty");
    return false;    
  }
  if(this.mobile===""){
    this.showAlert("Please enter mobile no");
    return false;      
    }

    if(this.mobile.toString().length!==10){
      this.showAlert("Please enter 10 digit  mobile no");
      return false;      
      }
      let data={
        "name":this.name,
        "Password":this.password,
        "Email":this.email,
        "Address":this.address,
        "City":this.city,
        "Mobil":this.mobile.toString()
      }
    this.registration(data)  
    }

    validateEmail(email) {
      const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regularExpression.test(String(email).toLowerCase());
     }
    async registration(data){
      const loading =await  this.loadingController.create({
        cssClass:"custom-alertDanger1",
        message: 'Please Wait....',
     
      });
      await loading.present();
  
      this.webapiService.Registration(data).subscribe(res => {
        console.log(res);
        loading.dismiss();
        console.log(res);
  
        if(res.id==="0"){
  this.showAlert(res.message);
        }else{
        this.router.navigate(['home']);
        }
       // this.showAlert(res.errors[0].errorMessage );
  
      
      }, error => {
        console.log(error);
        loading.dismiss();
      });
  
    }
   
  } 
  