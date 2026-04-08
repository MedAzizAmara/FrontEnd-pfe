import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ProfilRecruteur {
  prenom: string;
  nom: string;
  email: string;
  motDePasse: string;
  telephone: string;
  avatar: string | null;
}

interface Entreprise {
  nom: string;
  siteWeb: string;
  adresse: string;
  ville: string;
  logo: string | null;
  patente: string | null;
}

@Component({
  selector: 'app-profil-recruteur',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profil-recruteur.component.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ProfilRecruteurComponent {

  profil: ProfilRecruteur = {
    prenom: 'Jean-Pierre',
    nom: 'Beaumont',
    email: 'jp.beaumont@curator-group.com',
    motDePasse: 'password123',
    telephone: '+216 71 000 000',
    avatar: null
  };

  entreprise: Entreprise = {
    nom: 'Precision Curator Group',
    siteWeb: 'https://www.curator-group.com',
    adresse: 'Avenue Habib Bourguiba',
    ville: 'Tunis',
    logo: null,
    patente: 'patente_2024.pdf'
  };

  onAvatarChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profil.avatar = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onLogoChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.entreprise.logo = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onPatenteChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.entreprise.patente = file.name;
    }
  }

  onSauvegarder(): void {
    console.log('Profil sauvegardé :', this.profil);
    console.log('Entreprise sauvegardée :', this.entreprise);
    // Appel API ici
  }
}
