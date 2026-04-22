import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
  // ───────────── PUBLIC ─────────────
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () =>
      import('./auth/pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/pages/register/register.component').then(m => m.RegisterComponent)
  },

  // ───────────── CANDIDAT ─────────────
  {
    path: 'candidat',
    canActivate: [authGuard, roleGuard],
    data: { role: 'CANDIDAT' },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/candidat/pages/candidat-dashboard/candidat-dashboard.component')
            .then(m => m.CandidatDashboardComponent)
      },
      {
        path: 'offres/:id',
        loadComponent: () =>
          import('./features/candidat/pages/offre-detail-card/offre-detail-card.component')
            .then(m => m.OffreDetailCardComponent)
      },
      {
        path: 'offres/:id/postuler',
        loadComponent: () =>
          import('./features/candidat/job-application/job-application-page/job-application-page.component')
            .then(m => m.JobApplicationPageComponent)
      },

      // boîte de réception des entretiens
      {
        path: 'entretiens',
        loadComponent: () =>
          import('./features/candidat/pages/entretiens/entretiens.component')
            .then(m => m.EntretiensComponent)
      },
      {
        path: 'job-list',
        loadComponent: () =>
          import('./shared/pages/job-list/job-list.component')
            .then(m => m.JobListComponent)
      },
      {
        path: 'message-entretien',
        loadComponent: () =>
          import('./features/candidat/pages/message-entretien/message-entretien.component')
            .then(m => m.MessageEntretienComponent)
      },

      {
        path: 'profil',
        loadComponent: () =>
          import('./shared/components/profile-page/profile-page.component')
            .then(m => m.ProfilePageComponent)
      }
    ]
  },

  // ───────────── RECRUTEUR ─────────────
  {
    path: 'recruteur',
    canActivate: [authGuard, roleGuard],
    data: { role: 'RECRUTEUR' },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'offres/:id/modifier',
        loadComponent: () =>
          import('./features/recruteur/pages/modifier-offre/modifier-offre.component')
            .then(m => m.ModifierOffreComponent)
      },
      {
        path: 'recruteur-home',
        loadComponent: () =>
          import('./features/recruteur/pages/recruteur-home/recruteur-home.component')
            .then(m => m.RecruteurHomeComponent)
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/recruteur/pages/recruteur-dashboard/recruteur-dashboard.component')
            .then(m => m.RecruteurDashboardComponent)
      },
      {
        path: 'offres',
        loadComponent: () =>
          import('./features/recruteur/pages/mes-offres/mes-offres.component')
            .then(m => m.MesOffresComponent)
      },
      {
        path: 'offres/nouvelle',
        loadComponent: () =>
          import('./features/recruteur/pages/publier-offre/publier-offre.component')
            .then(m => m.PublierOffreComponent)
      },
      {
        path: 'profil',
        loadComponent: () =>
          import('./features/recruteur/pages/profil-recruteur/profil-recruteur.component')
            .then(m => m.ProfilRecruteurComponent)
      },
      {
        path: 'candidat/:id',
        loadComponent: () =>
          import('./features/recruteur/pages/candidat-profile/candidat-profile.component')
            .then(m => m.CandidatProfileComponent)
      },
      {
        path: 'envoi-message',
        loadComponent: () =>
          import('./features/recruteur/pages/envoi-message/envoi-message.component')
            .then(m => m.EnvoiMessageComponent)
      }
    ]
  },

  // ───────────── ADMIN ─────────────
  {
    path: 'admin',
    canActivate: [authGuard, roleGuard],
    data: { role: 'ADMIN' },
    children: [
      { path: '', redirectTo: 'recruteurs', pathMatch: 'full' },
      {
        path: 'recruteurs',
        loadComponent: () =>
          import('./features/admin/pages/liste-recruteurs/liste-recruteurs.component')
            .then(m => m.ListeRecruteursComponent)
      },
      {
        path: 'recruteurs/:id',
        loadComponent: () =>
          import('./features/admin/pages/detail-recruteur/detail-recruteur.component')
            .then(m => m.DetailRecruteurComponent)
      }
    ]
  },

  // ───────────── FALLBACK ─────────────
  { path: '**', redirectTo: 'home' }
];
