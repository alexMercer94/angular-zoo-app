import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from '../components/animals/animals.component';
import { ContactComponent } from '../components/contact/contact.component';
import { HomeComponent } from '../components/home/home.component';
import { KeepersComponent } from '../components/keepers/keepers.component';
import { StoreComponent } from '../components/store/store.component';

const routes: Routes = [
  // { path: '', component: StoreComponent },
  { path: 'home', component: HomeComponent },
  { path: 'store', component: StoreComponent },
  { path: 'animals', component: AnimalsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'keepers', component: KeepersComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
