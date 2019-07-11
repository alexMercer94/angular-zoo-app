import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminMainComponent } from './admin-main/admin-main.component';

const routes: Routes = [
  {
    path: 'admin-panel',
    component: AdminMainComponent,
    children: [
      { path: 'list', component: AdminListComponent },
      { path: 'create', component: AdminAddComponent },
      { path: 'edit', component: AdminEditComponent }
    ]
  },
  { path: 'panel-list', component: AdminListComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
