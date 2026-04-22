import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateCardComponent, CandidatMatch } from './components/candidate-card/candidate-card.component';
import { CandidatService } from '../../../../services/candidat.service';
import { Candidat } from '../../../../models/candidat.model';

@Component({
  selector: 'app-recruteur-dashboard',
  standalone: true,
  imports: [CommonModule, CandidateCardComponent],
  templateUrl: './recruteur-dashboard.component.html',
})
export class RecruteurDashboardComponent implements OnInit {

  candidates: CandidatMatch[] = [];
  chargement = false;
  erreur = '';

  constructor(private candidatService: CandidatService) {}

  ngOnInit(): void {
    this.chargerCandidats();
  }

  chargerCandidats(): void {
    this.chargement = true;
    this.erreur = '';

    this.candidatService.getAllCandidats().subscribe({
      next: (candidats: Candidat[]) => {
        this.candidates = candidats.map((candidat, index) => ({
          rank: index + 1,
          score: 0,
          candidat: {
            id: candidat.id,
            nom: candidat.nom,
            prenom: candidat.prenom,
            jobTitle: candidat.jobTitle,
            avatarUrl: candidat.avatarUrl,
            personalInfo: candidat.personalInfo,
            experiences: candidat.experiences,
            formations: candidat.formations,
            competences: candidat.competences,
            langues: candidat.langues,
            lettreMotivation: candidat.lettreMotivation
          }
        }));
        this.chargement = false;
      },
      error: (err) => {
        console.error('Erreur chargement candidats dashboard recruteur :', err);
        this.erreur = err?.error?.message || 'Impossible de charger les candidats.';
        this.candidates = [];
        this.chargement = false;
      }
    });
  }

  onInvite(candidate: CandidatMatch): void {
    console.log('Invite:', candidate.candidat.prenom, candidate.candidat.nom);
  }

  onViewProfile(candidate: CandidatMatch): void {
    console.log('Voir profil:', candidate.candidat.prenom, candidate.candidat.nom);
  }

  onRefuse(candidate: CandidatMatch): void {
    console.log('Refuser:', candidate.candidat.prenom, candidate.candidat.nom);
  }
}
