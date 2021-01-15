import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'single-post',
    loadChildren: () => import('./single-post/single-post.module').then( m => m.SinglePostPageModule)
  },
  {
    path: 'mix',
    loadChildren: () => import('./mix/mix.module').then( m => m.MixPageModule)
  },
  {
    path: 'encontre-zomo',
    loadChildren: () => import('./encontre-zomo/encontre-zomo.module').then( m => m.EncontreZomoPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'essencia',
    loadChildren: () => import('./essencia/essencia.module').then( m => m.EssenciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
