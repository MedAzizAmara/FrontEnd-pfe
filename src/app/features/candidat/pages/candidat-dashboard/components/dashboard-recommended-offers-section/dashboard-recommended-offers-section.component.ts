import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OffreRecommandee } from '../../../../../../models/offre-recommandee.model';

@Component({
  selector: 'app-dashboard-recommended-offers-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard-recommended-offers-section.component.html',
  styleUrls: ['./dashboard-recommended-offers-section.component.css']
})
export class DashboardRecommendedOffersSectionComponent {
  @Input() offres: OffreRecommandee[] = [];
}
