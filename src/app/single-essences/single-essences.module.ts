import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleEssencesPageRoutingModule } from './single-essences-routing.module';

import { SingleEssencesPage } from './single-essences.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleEssencesPageRoutingModule
  ],
  declarations: [SingleEssencesPage]
})
export class SingleEssencesPageModule {}
