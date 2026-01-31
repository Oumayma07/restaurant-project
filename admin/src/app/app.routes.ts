import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { ReservationsComponent } from './reservations/reservations';
import { AuthGuard } from './auth/auth.guard';
import { Inscription } from './auth/inscription/inscription';
import { Dashboard } from './dashboard/dashboard';
import { Avis } from './avis/avis';
import { ContactComponent } from './contact/contact';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'inscription', component: Inscription },
  { path: 'reservations', component: ReservationsComponent  },
  { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard]},
  { path: 'avis', component: Avis},
  { path: 'contact', component: ContactComponent},

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
