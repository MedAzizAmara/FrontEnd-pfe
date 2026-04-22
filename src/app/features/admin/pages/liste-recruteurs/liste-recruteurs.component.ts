import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PageHeaderService } from '../../../../services/page-header.service';
import { Recruteur, RecruiterCardComponent } from './components/recruiter-card/recruiter-card.component';

@Component({
  selector: 'app-liste-recruteurs',
  standalone: true,
  imports: [CommonModule, RecruiterCardComponent],
  templateUrl: './liste-recruteurs.component.html',
  styles: []
})
export class ListeRecruteursComponent implements OnInit {

  recruteurs: Recruteur[] = [
    {
      id: 1,
      nom: 'Elena Rodriguez',
      poste: 'Head of Talent Acquisition',
      entreprise: 'TechFlow Solutions',
      email: 'elena.r@techflow.io',
      ville: 'Lyon',
      pays: 'FR',
      photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTi38y0DoHENT6sya4ZfExOJbMowHTwHUQfh2nTN31h1EjNc1KsNjh0QaX8uormjUZdOu-w7qDi0zQSk2RASrR7GZJ3eckNKHIxBHlFU81Di363_XwByH7UzlUjjtgp2u1ch_PF60GSu0w6tgO02nc-kMCZsMZJeAtdtnP2ktTe3FUJ3F-jnw8HFtLOesBs3EbzM5XiGQElcILiMTrllrqUB4qbwNL_Mz38aSTy-lKQt343mesBTN4W55idI2NF3iiF3CDlbTXo0w'
    },
    {
      id: 2,
      nom: 'Marc Lefebvre',
      poste: 'Directeur des Ressources Humaines',
      entreprise: 'Nexus Group',
      email: 'm.lefebvre@nexus.com',
      ville: 'Paris',
      pays: 'FR',
      photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzWeZhoWwgag6C6Osw5Sjc-sJ4YiBP_gkcWOnW4xkPvNFhoiEJI-i1XzpDvXXfNVYnYsQoayErD-ZRvt3SMVX-lKec4CdUS8sZ7t8HlNr-pHmAbqLsoOCIlbnabENK3t-ULW3yE1e4-cshrwWjFm43bh3HMZ6SA0fipEnHyvKe0PoySc0vAlGGNt6C6Bgur2WM6L9B9OVxPqPfi8W8xUdcFGfTL4oW6I3Tl47wDDq9OMA_pWYg2sfgTMgz7okDMptrSr6U4os0LU0'
    }
  ];

  constructor(
    private router: Router,
    private pageHeaderService: PageHeaderService
  ) {}

  ngOnInit() {
  }

  onAccepter(id: number) {
    this.recruteurs = this.recruteurs.filter(r => r.id !== id);
  }

  onRefuser(id: number) {
    this.recruteurs = this.recruteurs.filter(r => r.id !== id);
  }

  onVoirDetails(id: number) {
    this.router.navigate(['/admin/recruteurs', id]);
  }
}
