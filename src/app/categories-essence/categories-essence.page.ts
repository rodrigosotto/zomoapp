import { async } from '@angular/core/testing';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, NavParams } from '@ionic/angular';
import { getLocaleDateFormat } from '@angular/common';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-essence',
  templateUrl: './categories-essence.page.html',
  styleUrls: ['./categories-essence.page.scss'],
})
export class CategoriesEssencePage implements OnInit {

  allCategoriesData: any ;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.getDataAllCategories();
  }

  async allCategoriesView(id: any) {
    await this.storage.set('id', id);
    await this.router.navigateByUrl('single-category');
  }

  async getDataAllCategories() {
    await this.apiService.getAPIDataAllCategories().subscribe(res => {
      console.log(res);
      this.allCategoriesData = res;
      console.log(this.allCategoriesData);
    }, err => {
      console.log(err);
    });
  }

}
