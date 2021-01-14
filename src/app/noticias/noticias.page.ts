import { async } from '@angular/core/testing';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, NavParams } from '@ionic/angular';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage {
  postData: any;


  constructor( private apiService: ApiService)  {}
 
    ngOnInit() {
      this.getData();
    }

  async getData(){
    await this.apiService.getAPIData().subscribe(res =>{
      console.log(res);
      this.postData = res;
      console.log(this.postData);
    },err =>{
      console.log(err);
    } );
  }
}
