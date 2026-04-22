import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidat } from '../models/candidat.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  private readonly apiUrl = `${environment.apiUrl}/api/candidats`;

  constructor(private http: HttpClient) {}

  getProfil(id: string): Observable<Candidat> {
    return this.http.get<Candidat>(`${this.apiUrl}/${id}`);
  }

  modifierProfil(id: string, candidat: Candidat): Observable<Candidat> {
    return this.http.put<Candidat>(`${this.apiUrl}/${id}`, candidat);
  }

  getAllCandidats(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.apiUrl);
  }
}
