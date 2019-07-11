import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnimalsComponent } from '../components/animals/animals.component';
import { ContactComponent } from '../components/contact/contact.component';
import { HomeComponent } from '../components/home/home.component';
import { KeepersComponent } from '../components/keepers/keepers.component';
import { ParksComponent } from '../components/parks/parks.component';
import { NavbarComponent } from '../components/shared/navbar/navbar.component';
import { StoreComponent } from '../components/store/store.component';
import { AdminModule } from '../pages/admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    AnimalsComponent,
    ContactComponent,
    HomeComponent,
    KeepersComponent,
    ParksComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, AppRoutingModule, AdminModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
