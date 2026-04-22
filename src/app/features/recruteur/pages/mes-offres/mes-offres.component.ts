import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffreCardComponent } from './components/offre-card/offre-card.component';
import { OffreCardViewModel } from '../../../../models/offre-card-view.model';
import { OffreService } from '../../../../services/offre.service';
import { OffreEmploi } from '../../../../models/offre-emploi.model';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-mes-offres',
  standalone: true,
  imports: [CommonModule, OffreCardComponent],
  templateUrl: './mes-offres.component.html',
})
export class MesOffresComponent implements OnInit {

  offres: OffreCardViewModel[] = [];
  chargement = false;
  erreur = '';

  constructor(
    private router: Router,
    private offreService: OffreService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.chargerMesOffres();
  }

  chargerMesOffres(): void {
    this.chargement = true;
    this.erreur = '';

    this.offreService.getToutesLesOffres().subscribe({
      next: (offres: OffreEmploi[]) => {
        const recruteurId = Number(this.authService.getUserId());

        const mesOffres = offres.filter(offre => offre.recruteurId === recruteurId);

        this.offres = mesOffres.map((offre) => ({
          id: offre.id,
          titre: offre.titre,
          icone: 'work',
          candidatures: 0,
          recommandes: 0,
          statut: offre.statut
        }));

        this.chargement = false;
      },
      error: (err) => {
        console.error('Erreur chargement mes offres :', err);
        this.erreur = err?.error?.message || 'Impossible de charger les offres.';
        this.offres = [];
        this.chargement = false;
      }
    });
  }

  onVoirCandidats(offre: OffreCardViewModel): void {
    if (offre.id != null) {
      void this.router.navigate(['/recruteur/dashboard'], {
        queryParams: { offreId: offre.id }
      });
    }
  }

  onModifier(offre: OffreCardViewModel): void {
    if (offre.id != null) {
      void this.router.navigate(['/recruteur/offres', offre.id, 'modifier']);
    }
  }

  onSupprimer(offre: OffreCardViewModel): void {
    if (offre.id == null) return;

    this.offreService.supprimerOffre(offre.id).subscribe({
      next: () => {
        this.offres = this.offres.filter(item => item.id !== offre.id);
      },
      error: (err) => {
        console.error('Erreur suppression offre :', err);
        this.erreur = err?.error?.message || 'Impossible de supprimer l’offre.';
      }
    });
  }
}
