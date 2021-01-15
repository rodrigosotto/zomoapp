import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncontreZomoPage } from './encontre-zomo.page';

const routes: Routes = [
  {
    path: '',
    component: EncontreZomoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncontreZomoPageRoutingModule {}
