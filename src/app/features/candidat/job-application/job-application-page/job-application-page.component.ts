import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProfilePageComponent } from '../../../../shared/components/profile-page/profile-page.component';
import { JobApplicationHeaderComponent } from '../components/job-application-header/job-application-header.component';
import { JobApplicationLetterFormComponent } from '../components/job-application-letter-form/job-application-letter-form.component';
import { JobApplicationActionsComponent } from '../components/job-application-actions/job-application-actions.component';

@Component({
  selector: 'app-job-application-page',
  standalone: true,
  imports: [
    CommonModule,
    ProfilePageComponent,
    JobApplicationHeaderComponent,
    JobApplicationLetterFormComponent,
    JobApplicationActionsComponent
  ],
  templateUrl: './job-application-page.component.html',
})
export class JobApplicationPageComponent {
  offre = {
    id: 1,
    titre: 'Développeur Full Stack Angular / Spring Boot',
    entreprise: 'TechCorp Tunisia',
    localisation: 'Tunis, Tunisie',
    typeContrat: 'CDI',
    modeTravail: 'Hybride',
    salaire: '3000 - 4500 TND',
    niveauExperience: '2 à 4 ans'
  };

  candidat = {
    id: 2,
    nom: 'Martin',
    prenom: 'Lucas',
    email: 'lucas.martin@gmail.com',
    telephone: '+216 20 000 000',
    cvNom: 'CV_Lucas_Martin.pdf'
  };

  matchingScore = 82;

  lettreMotivation = `Bonjour,

Je souhaite vous soumettre ma candidature pour le poste de Développeur Full Stack Angular / Spring Boot.

Mon expérience en Angular, Spring Boot et SQL, ainsi que ma capacité à travailler sur des projets web complets, me motivent particulièrement pour cette opportunité.

Je serais ravi d’échanger avec vous au sujet de ma candidature.

Cordialement,
Lucas Martin`;

  chargement = false;
  messageSucces = '';

  onLettreChange(valeur: string): void {
    this.lettreMotivation = valeur;
  }

  envoyerCandidature(): void {
    if (!this.lettreMotivation.trim()) {
      return;
    }

    this.chargement = true;
    this.messageSucces = '';

    const payload = {
      offreId: this.offre.id,
      candidatId: this.candidat.id,
      lettreMotivation: this.lettreMotivation.trim(),
      cvNom: this.candidat.cvNom
    };

    console.log('Payload candidature mock :', payload);

    setTimeout(() => {
      this.chargement = false;
      this.messageSucces = 'Candidature envoyée avec succès.';
      console.log('Candidature mock envoyée');
    }, 1200);
  }
}
