import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Candidate } from '../../../../../../models/candidate.model';

@Component({
  selector: 'app-candidate-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidate-card.component.html',
  styles: []
})
export class CandidateCardComponent {

  @Input({ required: true }) candidate!: Candidate;

  @Output() invite = new EventEmitter<Candidate>();
  @Output() viewProfile = new EventEmitter<Candidate>();
  @Output() refuse = new EventEmitter<Candidate>();

  get rankFormatted(): string {
    return String(this.candidate.rank).padStart(2, '0');
  }

  get score(): number {
    return this.candidate.score;
  }

  get scoreColor(): string {
    if (this.score >= 75) return '#10b981';
    if (this.score >= 50) return '#f59e0b';
    return '#ef4444';
  }

  onInvite()      { this.invite.emit(this.candidate); }
  onViewProfile() { this.viewProfile.emit(this.candidate); }
  onRefuse()      { this.refuse.emit(this.candidate); }
}
