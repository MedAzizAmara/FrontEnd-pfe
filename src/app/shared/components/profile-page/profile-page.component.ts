import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileHeaderComponent } from './profile-page/profile-header/profile-header.component';
import { PersonalInfoComponent } from './profile-page/personal-info/personal-info.component';
import { SkillsSectionComponent } from './profile-page/skills-section/skills-section.component';
import { LanguagesSectionComponent } from './profile-page/languages-section/languages-section.component';
import { ExperienceSectionComponent } from './profile-page/experience-section/experience-section.component';
import { EducationSectionComponent } from './profile-page/education-section/education-section.component';

export interface PersonalInfoData {
  nomComplet: string;
  titre: string;
  email: string;
  telephone: string;
  localisation: string;
  dateNaissance: string;
  github: string;
  linkedin: string;
  portfolio: string;
}

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    CommonModule,
    ProfileHeaderComponent,
    PersonalInfoComponent,
    SkillsSectionComponent,
    LanguagesSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent
  ],
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  isEditing = false;

  personalInfo: PersonalInfoData = {
    nomComplet: 'Aziz Amara',
    titre: 'Frontend Developer',
    email: 'aziz.amara@email.com',
    telephone: '+216 55 123 456',
    localisation: 'Tunis, Tunisie',
    dateNaissance: '2001-08-12',
    github: 'github.com/azizamara',
    linkedin: 'linkedin.com/in/azizamara',
    portfolio: 'www.azizportfolio.dev'
  };

  competences: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Tailwind CSS'
  ];

  langues: string[] = [
    'Arabe - Natif',
    'Français - C1',
    'Anglais - B2'
  ];

  experiences: string[] = [
    'Frontend Developer - ToutaJob - Jan 2025 à Présent',
    'Stagiaire Développeur Web - TechNova - Juin 2024 à Août 2024'
  ];

  formations: string[] = [
    'Licence en Informatique - ISAMM - 2021 à 2024',
    'Baccalauréat Informatique - Lycée pilote - 2020 à 2021'
  ];

  private snapshot = {
    personalInfo: { ...this.personalInfo },
    competences: [...this.competences],
    langues: [...this.langues],
    experiences: [...this.experiences],
    formations: [...this.formations]
  };

  onToggleEdit(): void {
    if (!this.isEditing) {
      this.snapshot = {
        personalInfo: { ...this.personalInfo },
        competences: [...this.competences],
        langues: [...this.langues],
        experiences: [...this.experiences],
        formations: [...this.formations]
      };
      this.isEditing = true;
      return;
    }

    this.isEditing = false;
  }

  onCancelEdit(): void {
    this.personalInfo = { ...this.snapshot.personalInfo };
    this.competences = [...this.snapshot.competences];
    this.langues = [...this.snapshot.langues];
    this.experiences = [...this.snapshot.experiences];
    this.formations = [...this.snapshot.formations];
    this.isEditing = false;
  }
}
