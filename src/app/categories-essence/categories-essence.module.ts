import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesEssencePageRoutingModule } from './categories-essence-routing.module';

import { CategoriesEssencePage } from './categories-essence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesEssencePageRoutingModule
  ],
  declarations: [CategoriesEssencePage]
})
export class CategoriesEssencePageModule {}
