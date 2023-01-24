import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { url } from 'inspector';

import { TabsPage } from './tabs.page';

//para que vaya directo a AvatarPageModule, le ponemos que si el tab es vacio, que vaya a AvatarPageModule
// mirar en la url, como vamos a estar navegando siempre dentro de Tabs / las demas paginas..
const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/account',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'account',
        loadChildren: () =>import('../avatar/avatar.module').then(m => m.AvatarPageModule)
      },
      {
        path: 'call',
        loadChildren: () =>import('../list/list.module').then(m => m.ListPageModule)

      },
      {
        path: 'settings',
        loadChildren: () =>import('../refresh/refresh.module').then(m => m.RefreshPageModule)
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
