import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { ReservationsComponent } from './reservations/reservations';
import { AuthGuard } from './auth/auth.guard';
import { Inscription } from './auth/inscription/inscription';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'inscription', component: Inscription },
  { path: 'reservations', component: ReservationsComponent, canActivate: [AuthGuard] },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
