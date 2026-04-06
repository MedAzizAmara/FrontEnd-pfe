import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffreCardComponent } from './components/offre-card/offre-card.component';

@Component({
  selector: 'app-offres',
  standalone: true,
  imports: [CommonModule, OffreCardComponent],
  templateUrl: './offres.component.html',
})
export class OffresComponent {}
