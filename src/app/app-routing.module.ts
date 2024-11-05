import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';


const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'gpss',
  loadChildren: () => import('./gpss/gpss.module').then(m => m.GpssPageModule)
  },
{
  path: 'historial',
  loadChildren: () => import('./historial/historial.module').then(m => m.HistorialPageModule)
},

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
