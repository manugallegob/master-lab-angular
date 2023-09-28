import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routed-components/home/home.component';
import { LoginComponent } from './routed-components/login/login.component';
import { AboutComponent } from './routed-components/about/about.component';
import { DashboardComponent } from './routed-components/dashboard/dashboard.component';
import { GaleryComponent } from './routed-components/galery/galery.component';
import { CrudComponent } from './routed-components/crud/crud.component';
import { ProfileComponent } from './routed-components/profile/profile.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },

  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'galery',
    component: GaleryComponent,
  },
  {
    path: 'crud',
    component: CrudComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
