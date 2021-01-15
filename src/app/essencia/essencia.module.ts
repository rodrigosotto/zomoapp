import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EssenciaPageRoutingModule } from './essencia-routing.module';

import { EssenciaPage } from './essencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EssenciaPageRoutingModule
  ],
  declarations: [EssenciaPage]
})
export class EssenciaPageModule {}
