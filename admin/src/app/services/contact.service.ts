import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


export interface Contact {
  id: string;
  name: string;
  email: string;
  type: string;
  rating: number;
  message: string;
  approved: boolean;
}

@Injectable({ providedIn: 'root' })
export class ContactService {

  private API = 'http://localhost:8080/api/contact';

  constructor(private http: HttpClient) {}

  // 🔹 ADMIN – récupérer tous les contacts
  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.API}/all`);
  }

  // 🔹 ADMIN – récupérer tous les avis (approuvés + non approuvés)
  getAllAvis(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.API}/avis1`);
  }

  // 🔹 ADMIN – approuver un avis
  approveAvis(id: string): Observable<Contact> {
    return this.http.put<Contact>(`${this.API}/${id}/approve`, {});
  }

  // 🔹 ADMIN – supprimer contact / avis / réclamation
  deleteContact(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
