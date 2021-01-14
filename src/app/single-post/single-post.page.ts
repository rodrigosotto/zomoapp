import { ApiService } from './../services/api.service';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.page.html',
  styleUrls: ['./single-post.page.scss'],
})
export class SinglePostPage implements OnInit {
  id: any;
  postView: any;
  constructor(private storage: Storage, private apiService: ApiService) { }

  ngOnInit() {
    this.storage.get('id').then((id) => {
      console.log('ID' + id);
      this.getData(id);
    });
  }
  async getData(id) {
    console.log(id);
    await this.apiService.getAPIDataByID(id).subscribe(res => {
      this.postView = res;
      console.log(this.postView);
    }, err => {
      console.log(err);
    });
  }
}
