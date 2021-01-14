import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinglePostPage } from './single-post.page';

const routes: Routes = [
  {
    path: '',
    component: SinglePostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglePostPageRoutingModule {}
