import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PageHeaderService } from '../../../../services/page-header.service';
import { OffreCardComponent, Offre } from './components/offre-card/offre-card.component';
@Component({
  selector: 'app-mes-offres',
  standalone: true,
  imports: [CommonModule, OffreCardComponent],
  templateUrl: './mes-offres.component.html',
  styles: []
})
export class MesOffresComponent implements OnInit {

  offres: Offre[] = [
    {
      id: 1,
      titre: 'Senior Full-Stack Developer',
      localisation: 'Paris, France',
      candidatures: 18,
      recommandes: 5,
      statut: 'active',
      icone: 'code'
    },
    {
      id: 2,
      titre: 'DevOps Engineer',
      localisation: 'Tunis, Tunisie',
      candidatures: 12,
      recommandes: 3,
      statut: 'active',
      icone: 'cloud'
    },
    {
      id: 3,
      titre: 'UI/UX Designer',
      localisation: 'Lyon, France',
      candidatures: 7,
      recommandes: 2,
      statut: 'soon',
      icone: 'brush'
    },
    {
      id: 4,
      titre: 'Data Scientist',
      localisation: 'Casablanca, Maroc',
      candidatures: 24,
      recommandes: 0,
      statut: 'expired',
      icone: 'analytics'
    },
  ];

  constructor(
    private router: Router,
    private pageHeaderService: PageHeaderService
  ) {}

  ngOnInit() {
    this.pageHeaderService.setHeader(
      'Gérez les offres que vous avez publiées.'
    );
  }

  onVoirCandidats(offre: Offre): void {
    this.router.navigate(['/recruteur/dashboard'], { queryParams: { offreId: offre.id } });
  }

  onModifier(offre: Offre): void {
    this.router.navigate(['/recruteur/modifier-offre', offre.id]);
  }

  onSupprimer(offre: Offre): void {
    this.offres = this.offres.filter(o => o.id !== offre.id);
  }
}
