import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OffreService } from '../../../../services/offre.service';
import { OffreEmploi } from '../../../../models/offre-emploi.model';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-modifier-offre',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modifier-offre.component.html',
})
export class ModifierOffreComponent implements OnInit {
  offreId: number | null = null;

  form: OffreEmploi = {
    titre: '',
    description: '',
    competencesRequises: '',
    localisation: '',
    typeContrat: '',
    statut: 'active'
  };

  erreur = '';
  succes = '';
  chargement = false;
  chargementInitial = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offreService: OffreService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.offreId = id ? Number(id) : null;

    if (!this.offreId) {
      this.erreur = 'Identifiant de l’offre invalide.';
      return;
    }

    this.chargerOffre();
  }

  chargerOffre(): void {
    if (!this.offreId) return;

    this.chargementInitial = true;
    this.erreur = '';

    this.offreService.getOffreById(this.offreId).subscribe({
      next: (offre) => {
        this.form = {
          id: offre.id,
          titre: offre.titre,
          description: offre.description,
          competencesRequises: offre.competencesRequises,
          localisation: offre.localisation,
          typeContrat: offre.typeContrat,
          statut: offre.statut,
          datePublication: offre.datePublication,
          recruteurId: offre.recruteurId,
          entreprise: offre.entreprise,
          logoUrl: offre.logoUrl,
          email: offre.email
        };
        this.chargementInitial = false;
      },
      error: (err) => {
        console.error('Erreur chargement offre :', err);
        this.erreur = err?.error?.message || 'Impossible de charger l’offre.';
        this.chargementInitial = false;
      }
    });
  }

  enregistrerModifications(): void {
    this.erreur = '';
    this.succes = '';

    if (!this.offreId) {
      this.erreur = 'Identifiant de l’offre invalide.';
      return;
    }

    if (
      !this.form.titre.trim() ||
      !this.form.description.trim() ||
      !this.form.competencesRequises.trim() ||
      !this.form.localisation.trim() ||
      !this.form.typeContrat.trim() ||
      !this.form.statut.trim()
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
      titre: this.form.titre,
      description: this.form.description,
      competencesRequises: this.form.competencesRequises,
      localisation: this.form.localisation,
      typeContrat: this.form.typeContrat,
      statut: this.form.statut,
      recruteurId: Number(userId)
    };

    this.chargement = true;

    this.offreService.modifierOffre(this.offreId, payload).subscribe({
      next: () => {
        this.succes = 'Les modifications ont été enregistrées avec succès.';
        this.chargement = false;
        this.router.navigate(['/recruteur/mes-offres']);
      },
      error: (err) => {
        console.error('Erreur modification offre :', err);
        this.erreur = err?.error?.message || 'Erreur lors de la modification de l’offre.';
        this.chargement = false;
      }
    });
  }

  annuler(): void {
    this.router.navigate(['/recruteur/mes-offres']);
  }
}
