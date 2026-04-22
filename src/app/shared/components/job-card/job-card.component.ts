import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export type JobCardMode = 'candidat' | 'recruteur';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './job-card.component.html',
})
export class JobCardComponent {
  @Input() title = '';
  @Input() company = '';
  @Input() email = '';
  @Input() location = '';
  @Input() logoUrl = '';
  @Input() statut = 'Nouveau';
  @Input() id?: number;
  @Input() matchScore: number | null = null;
  @Input() mode: JobCardMode = 'candidat';

  @Output() voirDetails = new EventEmitter<void>();
  @Output() postuler = new EventEmitter<void>();
  @Output() voirCandidats = new EventEmitter<void>();
  @Output() modifier = new EventEmitter<void>();
  @Output() supprimer = new EventEmitter<void>();

  get afficherActionsCandidat(): boolean {
    return this.mode === 'candidat';
  }

  get afficherActionsRecruteur(): boolean {
    return this.mode === 'recruteur';
  }
}
