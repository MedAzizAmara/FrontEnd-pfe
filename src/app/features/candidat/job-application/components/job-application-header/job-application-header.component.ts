import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-application-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-application-header.component.html',
})
export class JobApplicationHeaderComponent {
  @Input() titre = '';
  @Input() entreprise = '';
  @Input() localisation = '';
  @Input() typeContrat = '';
  @Input() modeTravail = '';
  @Input() salaire = '';
  @Input() niveauExperience = '';
  @Input() matchingScore = 0;

  get scoreLabel(): string {
    if (this.matchingScore >= 80) {
      return 'Très bon match';
    }

    if (this.matchingScore >= 60) {
      return 'Bon match';
    }

    return 'Match moyen';
  }

  get scoreDescription(): string {
    if (this.matchingScore >= 80) {
      return 'Votre profil correspond très bien à cette offre.';
    }

    if (this.matchingScore >= 60) {
      return 'Votre profil est bien aligné avec cette offre.';
    }

    return 'Votre profil est partiellement aligné avec cette offre.';
  }
}
