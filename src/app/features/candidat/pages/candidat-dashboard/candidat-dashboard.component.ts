import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardMessagesSectionComponent } from './components/dashboard-messages-section/dashboard-messages-section.component';
import { DashboardRecommendedOffersSectionComponent } from './components/dashboard-recommended-offers-section/dashboard-recommended-offers-section.component';
import { AuthService } from '../../../../services/auth.service';
import { OffreService } from '../../../../services/offre.service';
import { OffreEmploi } from '../../../../models/offre-emploi.model';
import { MessageRecu } from '../../../../models/message-recu.model';
import { OffreRecommandee } from '../../../../models/offre-recommandee.model';

@Component({
  selector: 'app-candidat-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    DashboardHeaderComponent,
    DashboardMessagesSectionComponent,
    DashboardRecommendedOffersSectionComponent
  ],
  templateUrl: './candidat-dashboard.component.html',
  styleUrls: ['./candidat-dashboard.component.css']
})
export class CandidatDashboardComponent implements OnInit {

  prenom = '';

  derniersMessages: MessageRecu[] = [];
  offresRecommandees: OffreRecommandee[] = [];

  chargement = false;
  erreur = '';

  constructor(
    private authService: AuthService,
    private offreService: OffreService
  ) {}

  ngOnInit(): void {
    this.prenom = this.authService.getNom() || '';
    this.chargerOffres();
  }

  chargerOffres(): void {
    this.chargement = true;
    this.erreur = '';

    this.offreService.getToutesLesOffres().subscribe({
      next: (offres: OffreEmploi[]) => {
        this.offresRecommandees = offres.map((offre) => ({
          id: offre.id ?? 0,
          titre: offre.titre,
          societe: offre.entreprise || '',
          localisation: offre.localisation,
          contrat: offre.typeContrat,
          recommandee: true
        }));
        this.chargement = false;
      },
      error: (err) => {
        console.error('Erreur chargement offres dashboard candidat :', err);
        this.erreur = err?.error?.message || 'Impossible de charger les offres.';
        this.offresRecommandees = [];
        this.chargement = false;
      }
    });
  }
}
