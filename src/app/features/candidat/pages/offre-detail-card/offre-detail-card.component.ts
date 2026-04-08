import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offre-detail-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offre-detail-card.component.html',
})
export class OffreDetailCardComponent implements OnInit {
  @Input() offre: any;
  @Output() postulerOffre = new EventEmitter<any>();

  ngOnInit() {
    if (!this.offre) {
      this.offre = {
        titre: 'Développeur Full Stack Angular / Spring Boot',
        entreprise: 'TechCorp Tunisia',
        statut: 'Active',
        datePublication: '05 Avril 2026',
        contrat: 'CDI',
        localisation: 'Tunis, Tunisie',
        description: [
          'Nous recherchons un développeur Full Stack passionné pour rejoindre notre équipe dynamique basée à Tunis.',
          'Vous serez responsable du développement et de la maintenance de nos applications web en utilisant Angular pour le frontend et Spring Boot pour le backend.',
          'Vous travaillerez en étroite collaboration avec nos équipes produit et design pour livrer des fonctionnalités de haute qualité dans un environnement agile.'
        ],
        competences: [
          'Angular 17+', 'Spring Boot', 'Java 17', 'TypeScript',
          'MySQL', 'REST API', 'Git', 'Tailwind CSS', 'Docker'
        ]
      };
    }
  }

  postuler() {
    this.postulerOffre.emit(this.offre);
  }
}
