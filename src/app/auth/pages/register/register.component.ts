import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import {
  RegisterCandidatRequest,
  RegisterRecruteurRequest
} from '../../../models/auth.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  roleSelectionne: 'CANDIDAT' | 'RECRUTEUR' = 'CANDIDAT';

  candidatForm: RegisterCandidatRequest = {
    nom: '',
    prenom: '',
    email: '',
    motDePasse: ''
  };

  recruteurForm: Omit<RegisterRecruteurRequest, 'patente'> = {
    nom: '',
    prenom: '',
    email: '',
    motDePasse: '',
    entreprise: ''
  };

  patenteSelectionnee: File | null = null;

  confirmationMotDePasse = '';
  erreur = '';
  chargement = false;

  afficherMotDePasse = false;
  afficherConfirmation = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  choisirRole(role: 'CANDIDAT' | 'RECRUTEUR'): void {
    this.roleSelectionne = role;
    this.erreur = '';
    this.confirmationMotDePasse = '';
  }

  onPatenteChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.patenteSelectionnee = input.files[0];
    }
  }

  get patenteName(): string {
    return this.patenteSelectionnee
      ? this.patenteSelectionnee.name
      : 'Télécharger un fichier...';
  }

  inscrire(): void {
    this.erreur = '';

    if (this.roleSelectionne === 'CANDIDAT') {
      this.inscrireCandidat();
    } else {
      this.inscrireRecruteur();
    }
  }

  inscrireCandidat(): void {
    if (
      !this.candidatForm.nom.trim() ||
      !this.candidatForm.prenom.trim() ||
      !this.candidatForm.email.trim() ||
      !this.candidatForm.motDePasse.trim() ||
      !this.confirmationMotDePasse.trim()
    ) {
      this.erreur = 'Veuillez remplir tous les champs.';
      return;
    }

    if (this.candidatForm.motDePasse !== this.confirmationMotDePasse) {
      this.erreur = 'Les mots de passe ne correspondent pas.';
      return;
    }

    this.chargement = true;

    this.authService.inscrireCandidat(this.candidatForm).subscribe({
      next: (response) => {
        this.authService.sauvegarderSession(response);
        this.router.navigate(['/candidat/dashboard']);
      },
      error: (err) => {
        console.log('Erreur inscription candidat :', err);
        this.erreur = err?.error?.message || err?.message || 'Impossible de créer le compte candidat.';
        this.chargement = false;
      },
      complete: () => {
        this.chargement = false;
      }
    });
  }

  inscrireRecruteur(): void {
    if (
      !this.recruteurForm.nom.trim() ||
      !this.recruteurForm.prenom.trim() ||
      !this.recruteurForm.email.trim() ||
      !this.recruteurForm.motDePasse.trim() ||
      !this.recruteurForm.entreprise.trim() ||
      !this.confirmationMotDePasse.trim()
    ) {
      this.erreur = 'Veuillez remplir tous les champs.';
      return;
    }

    if (!this.patenteSelectionnee) {
      this.erreur = 'La patente est obligatoire.';
      return;
    }

    if (this.recruteurForm.motDePasse !== this.confirmationMotDePasse) {
      this.erreur = 'Les mots de passe ne correspondent pas.';
      return;
    }

    const request: RegisterRecruteurRequest = {
      ...this.recruteurForm,
      patente: this.patenteSelectionnee
    };

    this.chargement = true;

    this.authService.inscrireRecruteur(request).subscribe({
      next: (response) => {
        this.authService.sauvegarderSession(response);
        this.router.navigate(['/recruteur/dashboard']);
      },
      error: (err) => {
        console.log('Erreur inscription recruteur :', err);
        this.erreur = err?.error?.message || err?.message || 'Impossible de créer le compte recruteur.';
        this.chargement = false;
      },
      complete: () => {
        this.chargement = false;
      }
    });
  }

  toggleMotDePasse(): void {
    this.afficherMotDePasse = !this.afficherMotDePasse;
  }

  toggleConfirmation(): void {
    this.afficherConfirmation = !this.afficherConfirmation;
  }
}
