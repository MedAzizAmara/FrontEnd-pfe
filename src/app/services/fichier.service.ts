import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fichier } from '../models/fichier.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FichierService {

  private readonly apiUrl = `${environment.apiUrl}/api/fichiers`;

  constructor(private http: HttpClient) {}

  uploadPatente(fichier: File): Observable<Fichier> {
    const formData = new FormData();
    formData.append('fichier', fichier);
    return this.http.post<Fichier>(`${this.apiUrl}/patente`, formData);
  }

  getFichierById(id: number): Observable<Fichier> {
    return this.http.get<Fichier>(`${this.apiUrl}/${id}`);
  }

  supprimerFichier(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
