import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GpssPage } from './gpss.page';

const routes: Routes = [
  {
    path: '',
    component: GpssPage // Carga el componente GpssPage en la ruta vacía
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GpssPageRoutingModule {}
