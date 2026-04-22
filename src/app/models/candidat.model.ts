import { PersonalInfo } from './personal-info.model';

export interface Candidat {
  id?: string;
  nom: string;
  prenom: string;
  jobTitle: string;
  avatarUrl: string;
  personalInfo: PersonalInfo;
  experiences: string[];
  formations: string[];
  competences: string[];
  langues: string[];
  lettreMotivation?: string;
}
