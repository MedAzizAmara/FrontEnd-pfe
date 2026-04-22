import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  NavigationEnd
} from '@angular/router';
import { filter } from 'rxjs/operators';

import { NavbarService } from '../../../services/navbar.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  estConnecte = false;
  role = '';
  displayName = '';
  initiales = '';
  libelleRole = '';

  dropdownOuvert = false;
  notifOuverte = false;

  constructor(
    private navbarService: NavbarService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.chargerInfosUtilisateur();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.chargerInfosUtilisateur();
      });
  }

  chargerInfosUtilisateur(): void {
    this.estConnecte = this.navbarService.estConnecte();
    this.role = this.navbarService.getRole();
    this.displayName = this.navbarService.getDisplayName();
    this.initiales = this.navbarService.getInitiales();
    this.libelleRole = this.navbarService.getLibelleRole();
  }

  toggleDropdown(): void {
    this.dropdownOuvert = !this.dropdownOuvert;
    this.notifOuverte = false;
  }

  toggleNotif(): void {
    this.notifOuverte = !this.notifOuverte;
    this.dropdownOuvert = false;
  }

  seDeconnecter(): void {
    this.authService.deconnecter();
    this.dropdownOuvert = false;
    this.notifOuverte = false;
    this.chargerInfosUtilisateur();
    this.router.navigate(['/']);
  }

  @HostListener('document:click', ['$event'])
  fermerMenus(event: MouseEvent): void {
    const elementClique = event.target as HTMLElement;

    const cliqueDansAvatar = elementClique.closest('#menu-avatar');
    const cliqueDansNotif = elementClique.closest('#menu-notif');

    if (!cliqueDansAvatar && !cliqueDansNotif) {
      this.dropdownOuvert = false;
      this.notifOuverte = false;
    }
  }
}
