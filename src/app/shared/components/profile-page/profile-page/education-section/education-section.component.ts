import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ValidationService } from '../../../../../services/validation.service';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css']
})
export class EducationSectionComponent {
  @Input() formations: string[] = [];
  @Output() formationsChange = new EventEmitter<string[]>();
  @Input() isEditing = false;

  errors: string[] = [];

  constructor(private validationService: ValidationService) {}

  onFormationChange(index: number, value: string): void {
    const next = [...this.formations];
    next[index] = value;
    this.formations = next;
    this.formationsChange.emit(next);
    this.errors[index] = this.validationService.validerEntree(value, 'formation');
  }

  addFormation(): void {
    this.formations = [...this.formations, ''];
    this.errors = [...this.errors, ''];
    this.formationsChange.emit(this.formations);
  }

  removeFormation(index: number): void {
    this.formations = this.formations.filter((_, i) => i !== index);
    this.errors = this.errors.filter((_, i) => i !== index);
    this.formationsChange.emit(this.formations);
  }
}
