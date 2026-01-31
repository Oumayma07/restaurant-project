import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { MenuComponent } from './pages/menu/menu';
import { ReservationComponent } from './pages/reservation/reservation';
import { LoginComponent } from './auth/login/login';
import { InscriptionComponent } from './auth/inscription/inscription';
import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Avis } from './pages/avis/avis';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'reservation', component: ReservationComponent, canActivate: [AuthGuard] },
  { path: 'avis', component: Avis },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/inscription', component: InscriptionComponent },
  { path: 'about', component:About},
  { path: 'contact', component:Contact},

  { path: '**', redirectTo: '' }
];


