import { NgModule } from '@angular/core';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { RouterModule, Routes } from '@angular/router';
import { PageAddClientsComponent } from './pages/page-add-clients/page-add-clients.component';

const appRoutes: Routes = [
  {
    path: '', component: PageClientsComponent
  },
  {
    path: 'add', component: PageAddClientsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ClientsRoutingModule { }
