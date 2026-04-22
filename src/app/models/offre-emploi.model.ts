export interface OffreEmploi {
  id?: number;
  titre: string;
  description: string;
  competencesRequises: string;
  localisation: string;
  typeContrat: string;
  datePublication?: string;
  statut: string;
  recruteurId?: number;
  entreprise?: string;
  logoUrl?: string;
  email?: string;
}
