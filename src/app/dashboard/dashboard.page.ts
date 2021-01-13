import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  public options: Array<any> = [
    {icon:'logo-facebook', text:'FACEBOOK'},
    {icon:'logo-instagram', text:'INSTAGRAM'},
    {icon:'logo-youtube', text:'YOUTUBE'},
  ];
  public slidesOptions: any = {slidesPerView: 3, freeMode: true};
  constructor() {

   }
  
}

export class PostDetailsPage {
  post: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = this.navParams.get('post');
  }
}
