import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileHeaderComponent } from '../profile-header/profile-header.component';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { ExperienceSectionComponent, Experience } from '../experience-section/experience-section.component';
import { EducationSectionComponent, Education } from '../education-section/education-section.component';
import { SkillsSectionComponent, SkillGroup, Language } from '../skills-section/skills-section.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    CommonModule,
    ProfileHeaderComponent,
    PersonalInfoComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    SkillsSectionComponent,
  ],
  templateUrl: './profile-page.component.html',
})
export class ProfilePageComponent {

  // true = candidat (peut modifier), false = recruteur (lecture seule)
  isOwner = true;
  isEditing = false;

  fullName = 'LUCAS MARTIN';
  jobTitle = 'STAGIAIRE EN MAÇONNERIE';
  avatarUrl = 'assets/lucas.jpg';
  age = 17;
  permis = 'Permis de conduire (B)';
  location = 'Villeurbanne, France';
  email = 'lucas@doyoubuzz.com';
  phone = '06 74 97 xx 66 54';

  experiences: Experience[] = [
    {
      title: 'STAGE EN JARDINAGE ET AMÉNAGEMENT PAYSAGER',
      company: 'Jardin & Vous',
      period: 'Novembre 2023',
      tasks: [
        'Participation à la création de 3 terrasses et à la pose de pavés, dont une en semi-autonomie.',
        "Utilisation d'outils de maçonnerie pour la construction de murs de soutènement.",
      ],
    },
    {
      title: "VENDEUR D'ARTICLES DE SPORT",
      company: 'DoYouSport',
      period: 'Juillet 2023 à septembre 2023',
      tasks: [
        'Service client (conseils et tenue de la caisse)',
        'Réparation des vélos des clients sur devis (environ 3 par semaine).',
        'Gestion des stocks (réception, mise en stock, inventaire)',
      ],
    },
  ];

  educations: Education[] = [
    { period: '2022 à 2023', school: 'Lycée Paul Valéry de Lyon', degree: 'Seconde générale' },
    { period: '2021', school: 'Collège Jean Moulin (Lyon)', degree: "Brevet d'Études du Premier Cycle (BEPC)" },
  ];

  skillGroups: SkillGroup[] = [
    {
      groupTitle: 'COMPÉTENCES EN MAÇONNERIE',
      skills: [
        'Manipulation des outils courants',
        'Pose de pavés',
        'Création de terrasses',
        'Construction de mur de soutènement',
      ],
    },
  ];

  languages: Language[] = [
    { name: 'Français', level: 'C2', percent: 100, note: 'Langue maternelle' },
    { name: 'Espagnol', level: 'B2', percent: 80, note: 'TOEIC : 900' },
  ];

  onEditClicked() {
    this.isEditing = true;
  }

  onSaveClicked() {
    this.isEditing = false;
    // Plus tard : appel API ici
  }
  onJobTitleChanged(value: string) {
    this.jobTitle = value;
  }

  onAvatarChanged(value: string) {
    this.avatarUrl = value;
  }
}
