import { ApiService } from './../services/api.service';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-essencias',
  templateUrl: './essencias.page.html',
  styleUrls: ['./essencias.page.scss'],
})
export class EssenciasPage implements OnInit {

  id: any;
  essencesView: any;
  constructor(private storage: Storage, private apiService: ApiService) { }

  ngOnInit() {
    this.storage.get('id').then((id) => {
      console.log('ID' + id);
      this.getData(id);
    });
  }
  async getData(id) {
    console.log(id);
    await this.apiService.getAPIDataEssencesByID(id).subscribe(res => {
      this.essencesView = res;
      console.log(this.essencesView);
    }, err => {
      console.log(err);
    });
  }

}
