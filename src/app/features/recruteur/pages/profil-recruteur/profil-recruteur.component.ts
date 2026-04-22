import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecruteurService } from '../../../../services/recruteur.service';
import { AuthService } from '../../../../services/auth.service';
import { Recruteur } from '../../../../models/recruteur.model';

@Component({
  selector: 'app-profil-recruteur',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profil-recruteur.component.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ProfilRecruteurComponent implements OnInit {

  recruteurId: number | null = null;

  profil: Recruteur = {
    entreprise: '',
    logoUrl: '',
    siteWeb: '',
    description: '',
    statutValidation: '',
    nom: '',
    prenom: '',
    email: '',
    patente: undefined
  };

  chargementInitial = false;
  chargement = false;
  erreur = '';
  succes = '';

  constructor(
    private recruteurService: RecruteurService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserId();

    if (!userId) {
      this.erreur = 'Utilisateur non connecté.';
      return;
    }

    this.recruteurId = Number(userId);
    this.chargerProfil();
  }

  chargerProfil(): void {
    if (!this.recruteurId) return;

    this.chargementInitial = true;
    this.erreur = '';

    this.recruteurService.getProfil(this.recruteurId).subscribe({
      next: (recruteur) => {
        this.profil = {
          id: recruteur.id,
          entreprise: recruteur.entreprise || '',
          logoUrl: recruteur.logoUrl || '',
          siteWeb: recruteur.siteWeb || '',
          description: recruteur.description || '',
          statutValidation: recruteur.statutValidation || '',
          nom: recruteur.nom || '',
          prenom: recruteur.prenom || '',
          email: recruteur.email || '',
          patente: recruteur.patente
        };
        this.chargementInitial = false;
      },
      error: (err) => {
        console.error('Erreur chargement profil recruteur :', err);
        this.erreur = err?.error?.message || 'Impossible de charger le profil recruteur.';
        this.chargementInitial = false;
      }
    });
  }

  onSauvegarder(): void {
    this.erreur = '';
    this.succes = '';

    if (!this.recruteurId) {
      this.erreur = 'Identifiant recruteur invalide.';
      return;
    }

    if (!this.profil.entreprise?.trim()) {
      this.erreur = 'Le nom de l’entreprise est obligatoire.';
      return;
    }

    const payload: Recruteur = {
      entreprise: this.profil.entreprise,
      logoUrl: this.profil.logoUrl || '',
      siteWeb: this.profil.siteWeb || '',
      description: this.profil.description || ''
    };

    this.chargement = true;

    this.recruteurService.modifierProfil(this.recruteurId, payload).subscribe({
      next: (updated) => {
        this.profil = {
          ...this.profil,
          entreprise: updated.entreprise || '',
          logoUrl: updated.logoUrl || '',
          siteWeb: updated.siteWeb || '',
          description: updated.description || '',
          statutValidation: updated.statutValidation || this.profil.statutValidation,
          patente: updated.patente || this.profil.patente
        };
        this.succes = 'Profil recruteur mis à jour avec succès.';
        this.chargement = false;
      },
      error: (err) => {
        console.error('Erreur mise à jour profil recruteur :', err);
        this.erreur = err?.error?.message || 'Impossible de sauvegarder les modifications.';
        this.chargement = false;
      }
    });
  }
}
