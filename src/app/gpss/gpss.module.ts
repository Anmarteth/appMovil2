import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { GpssPageRoutingModule } from './gpss-routing.module'; // Asegúrate de que la ruta sea correcta
import { GpssPage } from './gpss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GpssPageRoutingModule // Asegúrate de importar el módulo de enrutamiento
  ],
  declarations: [GpssPage]
})
export class GpssPageModule {}
