import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  // Si connecté → autoriser
  if (authService.estConnecte()) {
    return true;
  }

  // Sinon → rediriger vers login
  router.navigate(['/login']);
  return false;
};
