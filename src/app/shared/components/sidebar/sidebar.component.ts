import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  deconnecter(): void {
    this.authService.deconnecter();
    this.router.navigate(['/login']);
  }
}
