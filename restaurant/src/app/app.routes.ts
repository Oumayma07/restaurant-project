import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './pages/home/home';
import { MenuComponent } from './pages/menu/menu';
import { ReservationComponent } from './pages/reservation/reservation';
import { AvisComponent } from './pages/avis/avis';
import { LoginComponent } from './auth/login/login';
import { InscriptionComponent } from './auth/inscription/inscription';
import { AuthGuard } from './auth/auth.guard';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'reservation', component: ReservationComponent, canActivate: [AuthGuard] },
  { path: 'avis', component: AvisComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
