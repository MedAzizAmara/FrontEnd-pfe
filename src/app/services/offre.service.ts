import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OffreEmploi } from '../models/offre-emploi.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  private readonly apiUrl = `${environment.apiUrl}/api/offres`;

  constructor(private http: HttpClient) {}

  getToutesLesOffres(): Observable<OffreEmploi[]> {
    return this.http.get<OffreEmploi[]>(this.apiUrl);
  }

  getOffreById(id: number): Observable<OffreEmploi> {
    return this.http.get<OffreEmploi>(`${this.apiUrl}/${id}`);
  }

  creerOffre(offre: OffreEmploi): Observable<OffreEmploi> {
    return this.http.post<OffreEmploi>(this.apiUrl, offre);
  }

  modifierOffre(id: number, offre: OffreEmploi): Observable<OffreEmploi> {
    return this.http.put<OffreEmploi>(`${this.apiUrl}/${id}`, offre);
  }

  supprimerOffre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  rechercherParTitre(titre: string): Observable<OffreEmploi[]> {
    return this.http.get<OffreEmploi[]>(`${this.apiUrl}/recherche?titre=${titre}`);
  }

  filtrerParLocalisation(localisation: string): Observable<OffreEmploi[]> {
    return this.http.get<OffreEmploi[]>(`${this.apiUrl}/localisation?localisation=${localisation}`);
  }

  filtrerParTypeContrat(typeContrat: string): Observable<OffreEmploi[]> {
    return this.http.get<OffreEmploi[]>(`${this.apiUrl}/type-contrat?typeContrat=${typeContrat}`);
  }

  // ⚠️ à garder seulement si tu AJOUTES l'endpoint dans le backend
  getOffresParRecruteur(recruteurId: string): Observable<OffreEmploi[]> {
    return this.http.get<OffreEmploi[]>(`${this.apiUrl}/recruteur/${recruteurId}`);
  }
}
