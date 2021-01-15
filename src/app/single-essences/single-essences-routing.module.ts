import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleEssencesPage } from './single-essences.page';

const routes: Routes = [
  {
    path: '',
    component: SingleEssencesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleEssencesPageRoutingModule {}
