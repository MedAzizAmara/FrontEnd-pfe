import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ValidationService {

  private readonly patterns = {
    email:        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    telephone:    /^(\+216[\s]?)?[2345679]\d[\s]?\d{3}[\s]?\d{3}$/,
    github:       /^github\.com\/[a-zA-Z0-9_-]{1,39}$/,
    linkedin:     /^linkedin\.com\/in\/[a-zA-Z0-9_-]{3,100}$/,
    portfolio:    /^(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/.*)?$/,
    localisation: /^[A-Za-zÀ-ÿŒœÆæ\s'-]{2,50},\s[A-Za-zÀ-ÿŒœÆæ\s'-]{2,50}$/,
    langue:       /^[A-Za-zÀ-ÖØ-öø-ÿŒœÆæ' -]+ - (A1|A2|B1|B2|C1|C2|Natif)$/,
    entree:       /^[A-Za-zÀ-ÿŒœÆæ0-9\s'&]{2,50}\s-\s[A-Za-zÀ-ÿŒœÆæ0-9\s'&.]{2,50}\s-\s[A-Za-zÀ-ÿŒœÆæ0-9\s\-]{4,30}$/,
  };

  validerPersonalInfo(champ: keyof PersonalInfoChamps, valeur: string): string {
    const v = valeur.trim();
    const champsObligatoires: (keyof PersonalInfoChamps)[] = ['email', 'telephone', 'localisation', 'dateNaissance'];
    const estObligatoire = champsObligatoires.includes(champ);

    if (v === '') return estObligatoire ? 'Obligatoire.' : '';

    const messages: Partial<Record<keyof PersonalInfoChamps, string>> = {
      email:        'Email invalide. Ex: nom@gmail.com',
      telephone:    'Numéro invalide. Ex: +216 55 123 456',
      localisation: 'Format attendu : Tunis, Tunisie',
      github:       'Format attendu : github.com/votre-nom',
      linkedin:     'Format attendu : linkedin.com/in/votre-nom',
      portfolio:    'Format attendu : monsite.com',
    };

    const pattern = this.patterns[champ as keyof typeof this.patterns];
    if (pattern && !pattern.test(v)) return messages[champ] ?? 'Valeur invalide.';

    return '';
  }

  validerEntree(texte: string, type: 'experience' | 'formation'): string {
    const v = texte.trim();
    if (v === '') return 'Ce champ ne peut pas être vide.';
    if (!this.patterns.entree.test(v)) {
      return type === 'experience'
        ? 'Format attendu : Poste - Société - Période'
        : 'Format attendu : Diplôme - Établissement - Période';
    }
    return '';
  }

  validerLangue(valeur: string, autres: string[], index: number): string {
    const v = valeur.trim();
    if (v === '') return 'Ce champ ne peut pas être vide.';
    if (!this.patterns.langue.test(v)) return 'Format attendu : Français - B2';
    if (autres.some((l, j) => j !== index && l.trim().toLowerCase() === v.toLowerCase())) {
      return 'Cette langue est déjà dans la liste.';
    }
    return '';
  }

  validerCompetence(texte: string, autres: string[], index: number): string {
    const v = texte.trim();
    if (v === '') return 'Champ vide.';
    if (v.length < 2) return 'Minimum 2 caractères.';
    if (v.length > 50) return 'Maximum 50 caractères.';
    if (autres.some((c, j) => j !== index && c.trim().toLowerCase() === v.toLowerCase())) {
      return 'Compétence déjà ajoutée.';
    }
    return '';
  }
}

// Type helper local au service
type PersonalInfoChamps = {
  email: string; telephone: string; localisation: string;
  dateNaissance: string; github: string; linkedin: string; portfolio: string;
};
