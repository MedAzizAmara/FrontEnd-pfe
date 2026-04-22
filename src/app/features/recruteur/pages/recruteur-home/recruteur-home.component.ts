import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CandidatService } from '../../../../services/candidat.service';
import { OffreService } from '../../../../services/offre.service';
import { AuthService } from '../../../../services/auth.service';
import { PageHeaderService } from '../../../../services/page-header.service';
import { Candidat } from '../../../../models/candidat.model';
import { OffreEmploi } from '../../../../models/offre-emploi.model';

@Component({
  selector: 'app-recruteur-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recruteur-home.component.html',
})
export class RecruteurHomeComponent implements OnInit {

  candidats: Candidat[] = [];
  offres: OffreEmploi[] = [];

  chargementCandidats = false;
  chargementOffres = false;
  erreur = '';

  constructor(
    private candidatService: CandidatService,
    private offreService: OffreService,
    private authService: AuthService,
    private pageHeaderService: PageHeaderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.chargerCandidats();
    this.chargerOffres();
  }

  private chargerCandidats(): void {
    this.chargementCandidats = true;

    this.candidatService.getAllCandidats().subscribe({
      next: (candidats) => {
        this.candidats = candidats.slice(0, 6);
        this.chargementCandidats = false;
        this.mettreAJourStats();
      },
      error: (err) => {
        console.error('Erreur chargement candidats recruteur-home :', err);
        this.erreur = err?.error?.message || 'Impossible de charger les candidats.';
        this.candidats = [];
        this.chargementCandidats = false;
        this.mettreAJourStats();
      }
    });
  }

  private chargerOffres(): void {
    const id = this.authService.getUserId();

    if (!id) {
      this.erreur = 'Utilisateur non connecté.';
      return;
    }

    this.chargementOffres = true;

    this.offreService.getToutesLesOffres().subscribe({
      next: (offres) => {
        const recruteurId = Number(id);
        this.offres = offres
          .filter(offre => offre.recruteurId === recruteurId)
          .slice(0, 6);

        this.chargementOffres = false;
        this.mettreAJourStats();
      },
      error: (err) => {
        console.error('Erreur chargement offres recruteur-home :', err);
        this.erreur = err?.error?.message || 'Impossible de charger les offres.';
        this.offres = [];
        this.chargementOffres = false;
        this.mettreAJourStats();
      }
    });
  }

  private mettreAJourStats(): void {
    this.pageHeaderService.setStats([
      { label: 'Candidats disponibles', valeur: this.candidats.length },
      { label: 'Offres publiées', valeur: this.offres.length },
      { label: 'Entretiens prévus', valeur: 0 },
    ]);
  }

  voirCandidatures(offre: OffreEmploi): void {
    if (offre.id != null) {
      void this.router.navigate(['/recruteur/dashboard'], {
        queryParams: { offreId: offre.id }
      });
    }
  }

  inviterCandidat(candidat: Candidat): void {
    if (candidat.id) {
      void this.router.navigate(['/recruteur/envoi-message'], {
        queryParams: { candidatId: candidat.id }
      });
    }
  }
}
