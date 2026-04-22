import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-application-letter-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-application-letter-form.component.html',
})
export class JobApplicationLetterFormComponent {
  @Input() valeur = '';
  @Output() valeurChange = new EventEmitter<string>();

  longueurMin = 50;
  longueurMax = 2000;

  onInputChange(value: string): void {
    this.valeurChange.emit(value);
  }

  get caracteresCount(): number {
    return this.valeur.length;
  }

  get resteCaracteres(): number {
    return this.longueurMax - this.caracteresCount;
  }

  get estValide(): boolean {
    const texte = this.valeur.trim();
    return texte.length >= this.longueurMin && texte.length <= this.longueurMax;
  }
}
