import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home';

import { MenuComponent } from './pages/menu/menu';
import { ReservationComponent } from './pages/reservation/reservation';
import { AvisComponent } from './pages/avis/avis';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login';


// Définition des routes
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirection par défaut vers accueil
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'avis', component: AvisComponent },
  { path: 'login', component: LoginComponent}
  
];


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule, RouterModule], // ✅ utilisation de forRoot()
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
