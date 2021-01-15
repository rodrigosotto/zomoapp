import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncontreZomoPageRoutingModule } from './encontre-zomo-routing.module';

import { EncontreZomoPage } from './encontre-zomo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncontreZomoPageRoutingModule
  ],
  declarations: [EncontreZomoPage]
})
export class EncontreZomoPageModule {}
