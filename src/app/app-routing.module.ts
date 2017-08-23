import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { AdminComponent } from './pages/admin/admin.component'

import { AuthGuard } from './core/auth.guard'
import { AdminGuard } from './core/admin.guard'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ AdminGuard ]
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    AdminGuard
  ]
})
export class AppRoutingModule { }
