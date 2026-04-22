import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LoginRequest } from '../../../models/auth.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
})
export class LoginComponent {

  form: LoginRequest = {
    email: '',
    motDePasse: ''
  };

  erreur = '';
  chargement = false;
  afficherMotDePasse = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  connecter(): void {
    this.erreur = '';

    if (this.form.email === '' || this.form.motDePasse === '') {
      this.erreur = 'Veuillez remplir tous les champs.';
      return;
    }

    this.chargement = true;

    this.authService.connecter(this.form).subscribe({
      next: (response) => {
        this.authService.sauvegarderSession(response);

        if (response.role === 'CANDIDAT') {
          this.router.navigate(['/candidat/dashboard']);
        } else if (response.role === 'RECRUTEUR') {
          this.router.navigate(['/recruteur/dashboard']);
        } else if (response.role === 'ADMIN') {
          this.router.navigate(['/admin/recruteurs']);
        } else {
          this.router.navigate(['/home']);
        }
      },
      error: () => {
        this.erreur = 'Email ou mot de passe incorrect.';
        this.chargement = false;
      },
      complete: () => {
        this.chargement = false;
      }
    });
  }

  toggleMotDePasse(): void {
    this.afficherMotDePasse = !this.afficherMotDePasse;
  }
}
