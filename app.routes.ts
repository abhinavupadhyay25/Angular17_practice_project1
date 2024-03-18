import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '', component: DashboardComponent },
  { path: 'home', component: DashboardComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact',
    canActivate: [authGuard],
  },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: '**', component: PagenotfoundComponent, title: '404 Error' },
  // {
  //   path: 'aboutusnew',
  //   component: AboutComponent,
  //   outlet: 'outlet2',
  // },
];
