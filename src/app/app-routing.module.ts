import { Routes } from '@angular/router';
import { ListeRecruteursComponent } from './features/admin/pages/liste-recruteurs/liste-recruteurs.component';
import { RecruteurDashboardComponent } from './features/recruteur/pages/recruteur-dashboard/recruteur-dashboard.component';
import { MesOffresComponent } from './features/recruteur/pages/mes-offres/mes-offres.component';
import { PublierOffreComponent } from './features/recruteur/pages/publier-offre/publier-offre.component';
import { DetailRecruteurComponent } from './features/admin/pages/detail-recruteur/detail-recruteur.component';
import { EnvoiMessageComponent } from './features/recruteur/pages/envoi-message/envoi-message.component';

export const routes: Routes = [
  { path: '', redirectTo: 'recruteur/dashboard', pathMatch: 'full' },
  { path: 'admin/recruteurs', component: ListeRecruteursComponent },
  { path: 'recruteur/dashboard', component: RecruteurDashboardComponent },
  { path: 'recruteur/mes-offres', component: MesOffresComponent },
  { path: 'recruteur/publier-offre', component: PublierOffreComponent },
  {path: 'admin/detail-recruteur/:id', component: DetailRecruteurComponent,},
  { path: 'admin/detail-recruteur/:id', component: DetailRecruteurComponent },
  { path: 'recruteur/envoi-message',    component: EnvoiMessageComponent },
];
