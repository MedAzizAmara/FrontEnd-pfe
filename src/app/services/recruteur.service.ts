import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recruteur } from '../models/recruteur.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecruteurService {

  private readonly apiUrl = `${environment.apiUrl}/api/recruteurs`;

  constructor(private http: HttpClient) {}

  getProfil(id: number): Observable<Recruteur> {
    return this.http.get<Recruteur>(`${this.apiUrl}/${id}`);
  }

  modifierProfil(id: number, recruteur: Recruteur): Observable<Recruteur> {
    return this.http.put<Recruteur>(`${this.apiUrl}/${id}`, recruteur);
  }

  getAllRecruteurs(): Observable<Recruteur[]> {
    return this.http.get<Recruteur[]>(this.apiUrl);
  }
}
