import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],   // ✅ corrigé
  imports: [RouterModule],
})
export class HomeComponent {

  isOpen = false;

  constructor(private router: Router) {}   // ✅ Injection du Router

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  closeSidebar() {
    this.isOpen = false;
  }

  goToReservation() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);   // ✅ fonctionne maintenant
    } else {
      this.router.navigate(['/reservation']);
    }
  }
}
