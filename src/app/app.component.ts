import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidebarComponent,
    HeaderComponent,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
   /* this.authService.sauvegarderSession({
      token: 'fake-token',
      role: 'RECRUTEUR',
      userId: 1,
      nom: 'Rivers',
      prenom: 'Alex'
    });
*/


   /* this.authService.sauvegarderSession({
      token: 'fake-token',
      role: 'CANDIDAT',
      userId: 2,
      nom: 'Martin',
      prenom: 'Lucas'
    });

/*
    this.authService.sauvegarderSession({
      token: 'fake-token',
      role: 'ADMIN',
      userId: 3,
      nom: 'Wilson',
      prenom: 'James'
    });*/
  }
}
