import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesEssencePage } from './categories-essence.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesEssencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesEssencePageRoutingModule {}
