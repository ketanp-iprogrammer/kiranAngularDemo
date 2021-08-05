import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WildcardComponent } from './wildcard/wildcard.component';


const routes: Routes = [
  {
    path : '', // default route
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)

  },
  {
    path : '**', // wild card route
    component : WildcardComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
