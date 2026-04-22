import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Candidat } from '@models/candidat.model';
import { RouterModule } from '@angular/router';

// La forme d'un candidat avec son score et son rang
export interface CandidatMatch {
  rank: number;
  score: number;
  candidat: Candidat;
}

@Component({
  selector: 'app-candidate-card',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './candidate-card.component.html',
})
export class CandidateCardComponent {

  // Le candidat avec son score et son rang
  @Input() candidate!: CandidatMatch;

  // Événements envoyés au parent quand on clique sur un bouton
  @Output() invite = new EventEmitter<CandidatMatch>();
  @Output() viewProfile = new EventEmitter<CandidatMatch>();
  @Output() refuse = new EventEmitter<CandidatMatch>();

  // Formate le rang : 1 → "01", 2 → "02"...
  get rankFormatted(): string {
    return this.candidate.rank.toString().padStart(2, '0');
  }

  // Raccourci pour accéder au score
  get score(): number {
    return this.candidate.score;
  }

  // Couleur du cercle selon le score
  get scoreColor(): string {
    if (this.score >= 90) return '#4f46e5'; // indigo  → excellent
    if (this.score >= 70) return '#f59e0b'; // orange  → bien
    return '#ef4444';                        // rouge   → faible
  }

  // Méthodes appelées par les boutons
  onInvite(): void {
    this.invite.emit(this.candidate);
  }

  onViewProfile(): void {
    this.viewProfile.emit(this.candidate);
  }

  onRefuse(): void {
    this.refuse.emit(this.candidate);
  }
}
