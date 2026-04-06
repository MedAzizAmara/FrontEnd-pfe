import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Offre {
  id: number;
  titre: string;
  localisation: string;
  candidatures: number;
  recommandes: number;
  statut: 'active' | 'soon' | 'expired';
  icone: string;
}

@Component({
  selector: 'app-offre-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offre-card.component.html',
  styles: []
})
export class OffreCardComponent {

  @Input({ required: true }) offre!: Offre;

  @Output() voirCandidats = new EventEmitter<Offre>();
  @Output() modifier = new EventEmitter<Offre>();
  @Output() supprimer = new EventEmitter<Offre>();

  get statutLabel(): string {
    if (this.offre.statut === 'active') return 'Active';
    if (this.offre.statut === 'soon') return 'Bientôt';
    return 'Expirée';
  }

  get statutClasse(): string {
    if (this.offre.statut === 'active') return 'bg-green-100 text-green-700 border border-green-200';
    if (this.offre.statut === 'soon') return 'bg-orange-100 text-orange-700 border border-orange-200';
    return 'bg-red-100 text-red-700 border border-red-200';
  }
}
