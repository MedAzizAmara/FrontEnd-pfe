import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  LoginRequest,
  LoginResponse,
  RegisterCandidatRequest,
  RegisterRecruteurRequest
} from '../models/auth.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  inscrireCandidat(request: RegisterCandidatRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/inscription-candidat`, request);
  }

  inscrireRecruteur(request: RegisterRecruteurRequest): Observable<LoginResponse> {
    const formData = new FormData();
    formData.append('nom', request.nom);
    formData.append('prenom', request.prenom);
    formData.append('email', request.email);
    formData.append('motDePasse', request.motDePasse);
    formData.append('entreprise', request.entreprise);
    formData.append('patente', request.patente);

    return this.http.post<LoginResponse>(`${this.apiUrl}/inscription-recruteur`, formData);
  }

  connecter(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/connexion`, request);
  }

  deconnecter(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    localStorage.removeItem('nom');
    localStorage.removeItem('prenom');
  }

  sauvegarderSession(response: LoginResponse): void {
    localStorage.setItem('token', response.token);
    localStorage.setItem('role', response.role);
    localStorage.setItem('userId', response.userId.toString());
    localStorage.setItem('nom', response.nom);
    localStorage.setItem('prenom', response.prenom);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  getNom(): string | null {
    return localStorage.getItem('nom');
  }

  estConnecte(): boolean {
    const token = this.getToken();
    return !!(token && token !== 'null' && token !== 'undefined' && token.trim() !== '');
  }
}
