import { ApiService } from './../services/api.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.page.html',
  styleUrls: ['./single-category.page.scss'],
})
export class SingleCategoryPage implements OnInit {

  id: any;
  singleCatView: any;
  essencesCategoryData: any;

  constructor(    
    private apiService: ApiService,
    private router: Router,
    private storage: Storage,
    ) { }

  ngOnInit() {
    this.storage.get('id').then((id) => {
      console.log('ID' + id);
      this.getDataSingleCategory(id);
    });
  }
  async essenceView(id: any) {
    await this.storage.set('id', id);
    await this.router.navigateByUrl('essencias');
  }

  async getDataSingleCategory(id) {
    console.log(id);
    await this.apiService.getAPIDataSingleCategoryById(id).subscribe(res => {
      this.singleCatView = res;
      console.log(this.singleCatView);
    }, err => {
      console.log(err);
    });
  }

}
