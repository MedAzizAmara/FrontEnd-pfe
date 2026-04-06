import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SidebarService } from './services/sidebar.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public sidebarService: SidebarService
  ) {}

  ngOnInit() {
    this.authService.login({
      nom: 'James Wilson',
      role: 'admin',
      avatar: ''
    });
  }
}
