import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OffreService } from '../../../../services/offre.service';
import { OffreEmploi } from '../../../../models/offre-emploi.model';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-publier-offre',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './publier-offre.component.html',
  styleUrls: ['./publier-offre.component.css']
})
export class PublierOffreComponent {

  offre: OffreEmploi = {
    titre: '',
    description: '',
    competencesRequises: '',
    localisation: '',
    typeContrat: '',
    statut: 'active'
  };

  chargement = false;
  erreur = '';

  constructor(
    private offreService: OffreService,
    private authService: AuthService,
    private router: Router
  ) {}

  onPublier(): void {
    this.erreur = '';

    if (
      !this.offre.titre.trim() ||
      !this.offre.description.trim() ||
      !this.offre.competencesRequises.trim() ||
      !this.offre.localisation.trim() ||
      !this.offre.typeContrat.trim()
    ) {
      this.erreur = 'Veuillez remplir tous les champs obligatoires.';
      return;
    }

    const userId = this.authService.getUserId();

    if (!userId) {
      this.erreur = 'Utilisateur non connecté.';
      return;
    }

    const payload: OffreEmploi = {
      titre: this.offre.titre,
      description: this.offre.description,
      competencesRequises: this.offre.competencesRequises,
      localisation: this.offre.localisation,
      typeContrat: this.offre.typeContrat,
      statut: this.offre.statut || 'active',
      recruteurId: Number(userId)
    };

    this.chargement = true;

    this.offreService.creerOffre(payload).subscribe({
      next: (nouvelleOffre) => {
        this.chargement = false;
        this.router.navigate(['/recruteur/mes-offres']);
      },
      error: (error) => {
        console.error('Erreur publication offre :', error);
        this.erreur = error?.error?.message || 'Erreur lors de la publication de l’offre.';
        this.chargement = false;
      }
    });
  }

  onAnnuler(): void {
    this.router.navigate(['/recruteur/dashboard']);
  }
}
