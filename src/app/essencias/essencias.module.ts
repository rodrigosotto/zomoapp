import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EssenciasPageRoutingModule } from './essencias-routing.module';

import { EssenciasPage } from './essencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EssenciasPageRoutingModule
  ],
  declarations: [EssenciasPage]
})
export class EssenciasPageModule {}
