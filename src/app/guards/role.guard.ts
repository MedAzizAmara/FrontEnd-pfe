import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  // Récupérer le rôle attendu depuis la route
  const roleAttendu = route.data['role'];

  // Récupérer le rôle de l'utilisateur connecté
  const roleUtilisateur = authService.getRole();

  // Si le rôle correspond → autoriser
  if (roleUtilisateur === roleAttendu) {
    return true;
  }

  // Sinon → rediriger vers login
  router.navigate(['/login']);
  return false;
};
