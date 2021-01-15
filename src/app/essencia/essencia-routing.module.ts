import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EssenciaPage } from './essencia.page';

const routes: Routes = [
  {
    path: '',
    component: EssenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EssenciaPageRoutingModule {}
