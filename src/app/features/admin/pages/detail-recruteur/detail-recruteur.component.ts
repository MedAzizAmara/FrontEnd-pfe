import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { CompanyLogoComponent } from './components/company-logo/company-logo.component';
import { PatentViewerComponent } from './components/patent-viewer/patent-viewer.component';
import { StatusBadgeComponent } from './components/status-badge/status-badge.component';

@Component({
  selector: 'app-detail-recruteur',
  standalone: true,
  imports: [
    CommonModule,
    ProfileHeaderComponent,
    InfoSectionComponent,
    CompanyLogoComponent,
    PatentViewerComponent,
    StatusBadgeComponent,
  ],
  templateUrl: './detail-recruteur.component.html',
})
export class DetailRecruteurComponent {

  nom: string = 'JEAN-PIERRE MARCUS';
  titre: string = 'Directeur des Talents';
  photoUrl: string = 'https://lh3.googleusercontent.com/aida-public/AB6AXuClnXOnMiY1ZOOIuIugzd5hc1wHw3P31_F0VSyMMtFo2Tm5td8nD5Z-AXrKH3ULlsAAh9LWZmLHkpNATGQIHpw8DSS86P8Op80ZU_hxtFT5165DFRQDCkTA0YOPdaOPtWvZYV-2W0zrKpGvWiuXE3tnZgBH_crEGJZwco1HLpojUAgcIvYdzg_gN4fegl2JDDPCKaWAHWV_vmMvlpKV_ohWoG6f4XFZTXbscWKsVELld6WOsatH9VQ4MVWcQNebijzS543PNO6MmeA';
  statut: string = 'en_attente';
  age: string = '45 ans';
  email: string = 'jp.marcus@techsphere.io';
  telephone: string = '+33 1 45 67 89 00';
  localisation: string = '75002 Paris, France';
  nomEntreprise: string = 'TechSphere Solutions';
  siteWeb: string = 'www.techsphere.io';
  dateInscription: string = '12 Octobre 2023';
  logoUrl: string = '';
  kbisImageUrl: string = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCozu0papnD9XyC5KCHfDcSBrpzg_8Zyu78Bixnz6BfcJF-GNujOH6nXndXE7fdZLfohwkS4nKImXZ2dWQQuDLEmkABKA0mWUExb1hVbm7WEXVGufSITGhzp-FzShWcrBMOT-tJJjF-ASGA8aqkeRMRyNcEqQdDnZkCQAfHetrDIYUcFqqx4OWfB_ldHv30urrXK_Iq3Zh-txp-WJq-lOmuQ8_4vh-x5_gA06wLizWBVNwvNud1qTMlaCJRO3A4LaLeFrYJtW2UA9M';

  constructor(private router: Router) {}

  retourListe(): void {
    this.router.navigate(['/admin/liste-recruteurs']);
  }

  onAccepter(): void {
    console.log('Recruteur accepté');
  }

  onRefuser(): void {
    console.log('Recruteur refusé');
  }
}
