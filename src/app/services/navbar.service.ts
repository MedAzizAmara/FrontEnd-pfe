import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  estConnecte(): boolean {
    return localStorage.getItem('token') !== null;
  }

  getRole(): string {
    return localStorage.getItem('role') || '';
  }

  getPrenom(): string {
    return localStorage.getItem('prenom') || '';
  }

  getNom(): string {
    return localStorage.getItem('nom') || '';
  }

  getDisplayName(): string {
    const prenom = this.getPrenom();
    const nom = this.getNom();

    if (prenom && nom) {
      return prenom + ' ' + nom.charAt(0).toUpperCase() + '.';
    }

    if (prenom) {
      return prenom;
    }

    return '';
  }

  getInitiales(): string {
    const prenom = this.getPrenom();
    const nom = this.getNom();

    const initialePrenom = prenom ? prenom.charAt(0) : '';
    const initialeNom = nom ? nom.charAt(0) : '';

    return (initialePrenom + initialeNom).toUpperCase();
  }

  getLibelleRole(): string {
    const role = this.getRole();

    if (role === 'CANDIDAT') {
      return 'Candidat';
    }

    if (role === 'RECRUTEUR') {
      return 'Recruteur';
    }

    if (role === 'ADMIN') {
      return 'Admin';
    }

    return '';
  }
}
