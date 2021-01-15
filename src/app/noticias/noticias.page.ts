import { async } from '@angular/core/testing';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, NavParams } from '@ionic/angular';
import { getLocaleDateFormat } from '@angular/common';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage {
  postData: any;
  
  constructor(
    private apiService: ApiService,
    private router: Router,
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.getData();
  }

  async postView(id: any) {
    await this.storage.set('id', id);
    await this.router.navigateByUrl('single-post');
  }

  async getData() {
    await this.apiService.getAPIData().subscribe(res => {
      console.log(res);
      this.postData = res;
      console.log(this.postData);
    }, err => {
      console.log(err);
    });
  }
}
