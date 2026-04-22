import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ValidationService } from '../../../../../services/validation.service';

@Component({
  selector: 'app-languages-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './languages-section.component.html',
  styleUrls: ['./languages-section.component.css']
})
export class LanguagesSectionComponent {
  @Input() langues: string[] = [];
  @Output() languesChange = new EventEmitter<string[]>();
  @Input() isEditing = false;

  errors: string[] = [];

  constructor(private validationService: ValidationService) {}

  onLangueChange(index: number, value: string): void {
    const next = [...this.langues];
    next[index] = value;
    this.langues = next;
    this.languesChange.emit(next);
    this.errors[index] = this.validationService.validerLangue(value, next, index);
  }

  addLangue(): void {
    this.langues = [...this.langues, ''];
    this.errors = [...this.errors, ''];
    this.languesChange.emit(this.langues);
  }

  removeLangue(index: number): void {
    this.langues = this.langues.filter((_, i) => i !== index);
    this.errors = this.errors.filter((_, i) => i !== index);
    this.languesChange.emit(this.langues);
  }
}
