import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { JobCardComponent } from '../../components/job-card/job-card.component';
import { OffreService } from '../../../services/offre.service';
import { OffreEmploi } from '../../../models/offre-emploi.model';

interface JobItem {
  id: number;
  title: string;
  company: string;
  email: string;
  location: string;
  logoUrl: string;
  statut: string;
}

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, JobCardComponent],
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: JobItem[] = [];
  loading = false;
  errorMessage = '';

  constructor(
    private offreService: OffreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.chargerOffres();
  }

  chargerOffres(): void {
    this.loading = true;
    this.errorMessage = '';

    this.offreService.getToutesLesOffres().subscribe({
      next: (offres: OffreEmploi[]) => {
        this.jobs = offres.map((offre: OffreEmploi) => this.mapOffreToJobItem(offre));
        this.loading = false;
      },
      error: (error: unknown) => {
        console.error('Erreur lors du chargement des offres', error);
        this.errorMessage = 'Impossible de charger les offres pour le moment.';
        this.loading = false;
      }
    });
  }

  ouvrirDetails(job: JobItem): void {
    void this.router.navigate(['/candidat/offres', job.id]);
  }

  postuler(job: JobItem): void {
    void this.router.navigate(['/candidat/offres', job.id, 'postuler']);
  }

  private mapOffreToJobItem(offre: OffreEmploi): JobItem {
    return {
      id: offre.id ?? 0,
      title: offre.titre,
      company: offre.entreprise || 'Entreprise non renseignée',
      email: offre.email || this.buildEmailFromEntreprise(offre.entreprise || ''),
      location: offre.localisation,
      logoUrl: offre.logoUrl || 'assets/images/company-placeholder.png',
      statut: this.mapStatut(offre.statut)
    };
  }

  private mapStatut(statut: string): string {
    if (statut === 'active') {
      return 'Nouveau';
    }

    if (statut === 'inactive') {
      return 'Inactive';
    }

    return statut || 'Nouveau';
  }

  private buildEmailFromEntreprise(entreprise: string): string {
    const slug = entreprise
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '')
      .trim();

    return `contact@${slug || 'entreprise'}.com`;
  }
}
