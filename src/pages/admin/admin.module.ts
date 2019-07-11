import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminAddComponent, AdminEditComponent, AdminListComponent, AdminMainComponent],
  imports: [CommonModule, FormsModule, AdminRoutingModule, RouterModule],
  exports: [AdminAddComponent, AdminEditComponent, AdminListComponent, AdminMainComponent]
})
export class AdminModule {}
