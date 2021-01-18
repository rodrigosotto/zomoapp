import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleCategoryPageRoutingModule } from './single-category-routing.module';

import { SingleCategoryPage } from './single-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleCategoryPageRoutingModule
  ],
  declarations: [SingleCategoryPage]
})
export class SingleCategoryPageModule {}
