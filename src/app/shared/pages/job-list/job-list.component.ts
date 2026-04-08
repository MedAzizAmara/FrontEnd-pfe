import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from '@shared/components/job-card/job-card.component';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, JobCardComponent],
  templateUrl: './job-list.component.html',
})
export class JobListComponent {
  jobs = [
    {
      title: 'Développeur Full Stack Angular / Spring Boot',
      company: 'TechCorp Tunisia',
      email: 'recrutement@techcorp.tn',
      location: 'Tunis, TN',
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA18Mj-Htf_mgC_D_kWIGAsFHz_yNFkDRnPgBAbxbijdjKBNrPCgKnp8-Pb30xbL_heebSp-0ek8yABeqzNO2aUXeuOUFXpoJ28QDstE3xjHoB_GouPCAm0ThNqI97hTlyzr0eJz92vklOAtHAk4J7ejBLUg4oEzfvGH6Vmkue3quE3qAgRjAAqIvbk9KEuWs7DLipk1aN-qo29X3LkpPJJbdCXS80hwZroAt5pzrC69rvX9eYSnv6sq1HUm6WrBd2nednWGtRh7J4'
    },
    {
      title: 'Directeur Artistique Senior',
      company: 'Lumina Creative Agency',
      email: 'recrutement@lumina.design',
      location: 'Paris, FR',
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrQN4sOoQAQsdRPlCy5NISVOWE_jgHJnLTUDOXi3mjFb2h6rPOzr3iq4akhA4ZRDrTEAyyToimctxLKYQcbtFkAxNY9yUW7229KH1CjKH1vV2cK9O45EYsmZhdCkn27mL-nxOfKP-PU0_4H3u9ko6WWZfQVTNPMlwMqic3gI0CtaFQE8OkyIwvFTZrGaoBTKA_OsH7MMw_SkUeImkDzTbxdWfSbvMhve1CFPhVSaEAsGf_m2o-pi_uiE0ynjLkqaWn81-4rE00JOk'
    },
    {
      title: 'Architecte Solution Cloud',
      company: 'DataSphere Systems',
      email: 'hr@datasphere.io',
      location: 'Lyon, FR (Hybride)',
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA18Mj-Htf_mgC_D_kWIGAsFHz_yNFkDRnPgBAbxbijdjKBNrPCgKnp8-Pb30xbL_heebSp-0ek8yABeqzNO2aUXeuOUFXpoJ28QDstE3xjHoB_GouPCAm0ThNqI97hTlyzr0eJz92vklOAtHAk4J7ejBLUg4oEzfvGH6Vmkue3quE3qAgRjAAqIvbk9KEuWs7DLipk1aN-qo29X3LkpPJJbdCXS80hwZroAt5pzrC69rvX9eYSnv6sq1HUm6WrBd2nednWGtRh7J4'
    },
  ];
}
