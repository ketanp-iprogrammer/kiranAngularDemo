import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [
  {
    path: '', // default route
    component: LoginComponent
  },
  {
    path : 'dashboard/:id',
    canActivate : [AuthGuard],
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/