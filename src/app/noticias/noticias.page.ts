import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage {

  allPosts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient)  { 
    this.allPosts = this.httpClient.get('http://zomozpod.foa.company/wp-json/wp/v2/posts');
    //this.allPosts
    //.subscribe(data => {
     // console.log('Api Posts: ', data);
    //})
  }
  openDetails(post) {
    this.navCtrl.navigateForward('PostDetailsPage');
  }

}
