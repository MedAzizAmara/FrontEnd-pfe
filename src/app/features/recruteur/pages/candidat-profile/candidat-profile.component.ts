import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CandidatService } from '../../../../services/candidat.service';
import { Candidat } from '../../../../models/candidat.model';

import { ProfileHeaderComponent } from '@shared/components/profile-page/profile-page/profile-header/profile-header.component';
import { PersonalInfoComponent } from '@shared/components/profile-page/profile-page/personal-info/personal-info.component';
import { ExperienceSectionComponent } from '@shared/components/profile-page/profile-page/experience-section/experience-section.component';
import { EducationSectionComponent } from '@shared/components/profile-page/profile-page/education-section/education-section.component';
import { SkillsSectionComponent } from '@shared/components/profile-page/profile-page/skills-section/skills-section.component';
import { LanguagesSectionComponent } from '@shared/components/profile-page/profile-page/languages-section/languages-section.component';
import { PersonalInfoData } from '@shared/components/profile-page/profile-page.component';

@Component({
  selector: 'app-candidat-profile',
  standalone: true,
  imports: [
    CommonModule,
    ProfileHeaderComponent,
    PersonalInfoComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    SkillsSectionComponent,
    LanguagesSectionComponent,
  ],
  templateUrl: './candidat-profile.component.html',
  styleUrls: ['./candidat-profile.component.css']
})
export class CandidatProfileComponent implements OnInit {

  candidat: Candidat | null = null;
  chargement = false;
  erreur = '';

  constructor(
    private route: ActivatedRoute,
    private candidatService: CandidatService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.erreur = 'Identifiant candidat invalide.';
      return;
    }

    this.chargerCandidat(id);
  }

  chargerCandidat(id: string): void {
    this.chargement = true;
    this.erreur = '';

    this.candidatService.getProfil(id).subscribe({
      next: (candidat) => {
        this.candidat = candidat;
        this.chargement = false;
      },
      error: (err) => {
        console.error('Erreur chargement profil candidat :', err);
        this.erreur = err?.error?.message || 'Impossible de charger le profil candidat.';
        this.chargement = false;
      }
    });
  }

  get mappedPersonalInfo(): PersonalInfoData {
    if (!this.candidat) {
      return {
        nomComplet: '',
        titre: '',
        email: '',
        telephone: '',
        localisation: '',
        dateNaissance: '',
        github: '',
        linkedin: '',
        portfolio: ''
      };
    }

    return {
      nomComplet: `${this.candidat.prenom} ${this.candidat.nom}`.trim(),
      titre: this.candidat.jobTitle || '',
      email: this.candidat.personalInfo.email || '',
      telephone: this.candidat.personalInfo.telephone || '',
      localisation: this.candidat.personalInfo.localisation || '',
      dateNaissance: this.candidat.personalInfo.dateNaissance || '',
      github: this.candidat.personalInfo.github || '',
      linkedin: this.candidat.personalInfo.linkedin || '',
      portfolio: this.candidat.personalInfo.portfolio || ''
    };
  }
}
