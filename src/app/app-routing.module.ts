import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { GpssPage } from './gpss/gpss.page'; 
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    canActivate:[AuthGuard]
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
  loadChildren: () => import('./gpss/gpss.module').then(m => m.GpssPageModule),
  canActivate:[AuthGuard]
  },
{
  path: 'historial',
  loadChildren: () => import('./historial/historial.module').then(m => m.HistorialPageModule),
  canActivate:[AuthGuard]
},

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'historial',
    loadChildren: () => import('./historial/historial.module').then( m => m.HistorialPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
