import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-logo.component.html',
})
export class CompanyLogoComponent {
  @Input() nomEntreprise: string = '';
  @Input() logoUrl: string = '';
}
