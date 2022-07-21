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

  constructor(private webapiService: WebapiService) { }

  ngOnInit() {
  }

}
