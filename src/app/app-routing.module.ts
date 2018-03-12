import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PlayPageComponent } from './PlayPage/PlayPage.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'playpage', component: PlayPageComponent },
  // { path: 'hero/:id',      component: HomeComponent },
  // {
  //   path: 'heroes',
  //   component: HomeComponent,
  //   data: { title: 'Heroes List' }
  // },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}