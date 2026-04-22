import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidature } from '../models/candidature.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  private readonly apiUrl = `${environment.apiUrl}/api/candidatures`;

  constructor(private http: HttpClient) {}

  postuler(candidature: Candidature): Observable<Candidature> {
    return this.http.post<Candidature>(this.apiUrl, candidature);
  }

  getMesCandidatures(candidatId: string): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(`${this.apiUrl}/candidat/${candidatId}`);
  }

  annulerCandidature(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getCandidaturesParOffre(offreId: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(`${this.apiUrl}/offre/${offreId}`);
  }

  accepterCandidature(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/accepter`, {});
  }

  refuserCandidature(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/refuser`, {});
  }
}
