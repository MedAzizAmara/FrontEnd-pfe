import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Recruteur {
  id: number;
  nom: string;
  poste: string;
  entreprise: string;
  email: string;
  ville: string;
  pays: string;
  photo: string;
}

@Component({
  selector: 'app-recruiter-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recruiter-card.component.html',
  styles: []
})
export class RecruiterCardComponent {
  @Input() recruteur!: Recruteur;
  @Output() accepter = new EventEmitter<number>();
  @Output() refuser = new EventEmitter<number>();
  @Output() voirDetails = new EventEmitter<number>();
}
