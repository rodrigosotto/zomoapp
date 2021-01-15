import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MixPageRoutingModule } from './mix-routing.module';

import { MixPage } from './mix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MixPageRoutingModule
  ],
  declarations: [MixPage]
})
export class MixPageModule {}
