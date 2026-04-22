import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffreEmploi } from '../../../../models/offre-emploi.model';

@Component({
  selector: 'app-offre-detail-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offre-detail-card.component.html',
})
export class OffreDetailCardComponent {
  @Input() offre!: OffreEmploi;
  @Output() postulerOffre = new EventEmitter<OffreEmploi>();

  postuler(): void {
    this.postulerOffre.emit(this.offre);
  }

  get descriptionParagraphs(): string[] {
    if (!this.offre?.description) return [];
    return this.offre.description
      .split('\n')
      .map(p => p.trim())
      .filter(p => p.length > 0);
  }

  get competencesList(): string[] {
    if (!this.offre?.competencesRequises) return [];
    return this.offre.competencesRequises
      .split(',')
      .map(skill => skill.trim())
      .filter(skill => skill.length > 0);
  }
}
