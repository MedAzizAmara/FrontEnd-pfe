import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Candidate } from '../../../../models/candidate.model';
import { CandidateCardComponent } from './components/candidate-card/candidate-card.component';

@Component({
  selector: 'app-recruteur-dashboard',
  standalone: true,
  imports: [CommonModule, CandidateCardComponent],
  templateUrl: './recruteur-dashboard.component.html',
  styles: []
})
export class RecruteurDashboardComponent {

  candidates: Candidate[] = [
    {
      rank: 1,
      name: 'Alex Sterling',
      title: 'Full Stack Architect',
      location: 'Paris, FR',
      email: 'alex.s@techcurate.io',
      phone: '+33 6 12 34 56 78',
      linkedin: 'linkedin.com/in/asterling',
      photoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH6JOmWmHC654AkiGGNlDBSRjr89L5UdvfBXueuI7LoqvtFEn2UcUh6hBWlwY46kmIc9JxWp-mit-sOoQ6ab5c30i6sAR7CjpLKpyV2MT-lFoZlwwJ-rPx7KQX-NBl2jt1GXE7ua0JIMrkDTvpQaOYnSv1NHZQM_3l_l9o9Ztr_L4AlHynZx7q9JSlkuNJxURSyD7HrSBqyWF4PihIvCF9CUvjSI1lCOmY7epGizF6T7KmRsik_U-V4oprqNhtKNSGV-S0TIDky-g',
      score: 98,
    },
    {
      rank: 2,
      name: 'Sara Mendes',
      title: 'DevOps Engineer',
      location: 'Tunis, TN',
      email: 'sara.m@devcloud.io',
      phone: '+216 55 123 456',
      linkedin: 'linkedin.com/in/saramendes',
      photoUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      score: 87,
    },
    {
      rank: 3,
      name: 'Karim Belhaj',
      title: 'Backend Developer',
      location: 'Casablanca, MA',
      email: 'karim.b@softlab.ma',
      phone: '+212 6 98 76 54 32',
      linkedin: 'linkedin.com/in/karimbelhaj',
      photoUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      score: 74,
    },
  ];

  onInvite(candidate: Candidate): void {
    console.log('Invite:', candidate.name);
  }

  onViewProfile(candidate: Candidate): void {
    console.log('Voir profil:', candidate.name);
  }

  onRefuse(candidate: Candidate): void {
    console.log('Refuser:', candidate.name);
  }
}
