import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { ReservationService } from '../services/reservation.service';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  totalReservations = 0;
  totalContacts = 0;
  totalAvis =0;
  pendingAvis = 0;
  approvedAvis = 0;
  reclamations =0;

  constructor(
    private ContactService: ContactService,  private ReservationService: ReservationService,
    private router: Router, private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadStats();
    this.loadRes();
    this.loadAvis();
    this.loadRecla();
    this.loadCont();
  }

  loadStats() {
    this.ContactService.getAllContacts().subscribe({next: (contacts) => {

      const avis = contacts.filter(c => c.type === 'AVIS');
      console.log("avis backend=",contacts);
      this.totalAvis = avis.length;
       this.cdr.detectChanges();
    },
    error: (err) => console.error("error",err)
    });
  }


  loadCont() {
    this.ContactService.getAllContacts().subscribe({next: (contacts) => {

      console.log("contact backend=",contacts);
      this.totalContacts = contacts.length;
       this.cdr.detectChanges();
    },
    error: (err) => console.error("error",err)
    });
  }

  loadRecla() {
    this.ContactService.getAllContacts().subscribe({next: (contacts) => {

      const rec = contacts.filter(c => c.type === 'RECLAMATION');
      console.log("reclamation backend=",contacts);
      this.reclamations = rec.length;
       this.cdr.detectChanges();
    },
    error: (err) => console.error("error",err)
    });
  }

loadAvis() {
    this.ContactService.getAllContacts().subscribe(contacts => {
  const avis = contacts.filter(c => c.type === 'AVIS');
      this.approvedAvis = avis.filter(a => a.approved).length;
      this.pendingAvis = avis.filter(a => !a.approved).length;

      this.cdr.detectChanges();
      });
  }

  loadRes() {
  this.ReservationService.getAllReservations().subscribe({
    next: (res) => {
      console.log("reservation backend=",res);
      this.totalReservations = res.length;
      this.cdr.detectChanges();
    },
    error: (err) => console.error("error",err)
  });
}

loadChart() {
    this.ReservationService.getAllReservations().subscribe(res => {

      // group by date
      const dates: any = {};
      res.forEach(r => {
        const d = r.dateReservation.split('T')[0];
        dates[d] = (dates[d] || 0) + 1;
      });

      const labels = Object.keys(dates);
      const values = Object.values(dates);

      new Chart("reservationChart", {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Réservations',
            data: values,
            borderColor: 'gold',
            backgroundColor: 'rgba(255,215,0,0.2)',
            tension: 0.4
          }]
        }
      });
    });
  }

  logout() {
    localStorage.removeItem('admin-token');
    this.router.navigate(['/admin/login']);
  }

}
