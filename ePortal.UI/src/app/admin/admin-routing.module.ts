import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children:
      [
        { path: '', loadChildren: () => import('../dashboard/dashboard-routing.module').then((m) => m.DashboardRoutingModule) },
        { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard-routing.module').then((m) => m.DashboardRoutingModule) },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
