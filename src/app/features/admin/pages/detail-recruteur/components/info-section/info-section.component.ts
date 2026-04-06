import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-section.component.html',
})
export class InfoSectionComponent {
  @Input() titre: string = '';
  @Input() age: string = '';
  @Input() email: string = '';
  @Input() telephone: string = '';
  @Input() localisation: string = '';
  @Input() nomEntreprise: string = '';
  @Input() siteWeb: string = '';
  @Input() dateInscription: string = '';
}
