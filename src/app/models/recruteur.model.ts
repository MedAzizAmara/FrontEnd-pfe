import { Fichier } from './fichier.model';

export interface Recruteur {
  id?: number;
  entreprise: string;
  logoUrl?: string;
  siteWeb?: string;
  description?: string;
  statutValidation?: string;
  nom?: string;
  prenom?: string;
  email?: string;
  patente?: Fichier;
}
