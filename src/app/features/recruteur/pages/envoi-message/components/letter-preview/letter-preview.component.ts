import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-letter-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './letter-preview.component.html',
})
export class LetterPreviewComponent {
  @Input() societe: string = '';
  @Input() poste: string = '';
  @Input() date: string = '';
  @Input() heure: string = '';
  @Input() telephone: string = '';
  @Input() email: string = '';
  @Input() nomRecruteur: string = '';

  @Output() envoyer = new EventEmitter<void>();
}
