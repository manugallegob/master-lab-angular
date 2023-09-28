import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './layout-components/footer/footer.component';
import { PublicMenuComponent } from './layout-components/public-menu/public-menu.component';
import { PrivateMenuComponent } from './layout-components/private-menu/private-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './routed-components/home/home.component';
import { LoginComponent } from './routed-components/login/login.component';
import { AboutComponent } from './routed-components/about/about.component';
import { DashboardComponent } from './routed-components/dashboard/dashboard.component';
import { GaleryComponent } from './routed-components/galery/galery.component';
import { CrudComponent } from './routed-components/crud/crud.component';
import { ProfileComponent } from './routed-components/profile/profile.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlicePipe } from '@angular/common';
import { RotateDirective } from './rotate.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PublicMenuComponent,
    PrivateMenuComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    DashboardComponent,
    GaleryComponent,
    CrudComponent,
    ProfileComponent,
    RotateDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
