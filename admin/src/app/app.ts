import { Component } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Login } from './auth/login/login';
import { Inscription } from './auth/inscription/inscription';
import { ReservationsComponent } from './reservations/reservations';


const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'inscription', component: Inscription },
  {
    path: 'reservation',
    loadComponent: () => import('./reservations/reservations').then(m => m.ReservationsComponent)
  },
  { path: '', redirectTo: 'reservation', pathMatch: 'full' }

];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterOutlet,

],
  template: `
    <div class="main-content">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .main-content {
      padding: 50px;
    }
  `]
})
export class App {}
