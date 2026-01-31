import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contact {
  name: string;
  email: string;
  type: 'AVIS' | 'RECLAMATION' | 'CONTACT';
  rating?: number;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:8080/api/contact'; // 🔹 ton backend Spring Boot

  constructor(private http: HttpClient) {}

  submitContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.apiUrl}/submit`, contact);
  }

  getApprovedAvis(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiUrl}/avis`);
  }

  
}
