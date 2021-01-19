import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EssenciasPage } from './essencias.page';

const routes: Routes = [
  {
    path: '',
    component: EssenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EssenciasPageRoutingModule {}
