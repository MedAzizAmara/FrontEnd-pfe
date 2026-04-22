import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OffreCardViewModel } from '../../../../../../models/offre-card-view.model';

@Component({
  selector: 'app-offre-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offre-card.component.html',
})
export class OffreCardComponent {
  @Input() offre!: OffreCardViewModel;

  @Output() voirCandidats = new EventEmitter<OffreCardViewModel>();
  @Output() modifier = new EventEmitter<OffreCardViewModel>();
  @Output() supprimer = new EventEmitter<OffreCardViewModel>();

  get statutLabel(): string {
    switch ((this.offre?.statut || '').toUpperCase()) {
      case 'ACTIVE':
        return 'Active';
      case 'BROUILLON':
        return 'Brouillon';
      case 'EXPIREE':
        return 'Expirée';
      case 'NOUVELLE':
        return 'Nouvelle';
      case 'INACTIVE':
        return 'Inactive';
      default:
        return this.offre?.statut || 'Statut';
    }
  }

  get statutClasse(): string {
    switch ((this.offre?.statut || '').toUpperCase()) {
      case 'ACTIVE':
        return 'bg-tertiary-container text-on-tertiary-container';
      case 'BROUILLON':
        return 'bg-warning-container text-on-warning-container';
      case 'EXPIREE':
        return 'bg-error-container text-error';
      case 'NOUVELLE':
        return 'bg-primary-container text-primary';
      case 'INACTIVE':
        return 'bg-surface-container-high text-on-surface';
      default:
        return 'bg-surface-container text-on-surface-variant';
    }
  }
}
