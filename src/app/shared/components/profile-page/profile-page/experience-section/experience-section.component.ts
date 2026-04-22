import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ValidationService } from '../../../../../services/validation.service';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.css']
})
export class ExperienceSectionComponent {
  @Input() experiences: string[] = [];
  @Output() experiencesChange = new EventEmitter<string[]>();
  @Input() isEditing = false;

  errors: string[] = [];

  constructor(private validationService: ValidationService) {}

  onExperienceChange(index: number, value: string): void {
    const next = [...this.experiences];
    next[index] = value;
    this.experiences = next;
    this.experiencesChange.emit(next);
    this.errors[index] = this.validationService.validerEntree(value, 'experience');
  }

  addExperience(): void {
    this.experiences = [...this.experiences, ''];
    this.errors = [...this.errors, ''];
    this.experiencesChange.emit(this.experiences);
  }

  removeExperience(index: number): void {
    this.experiences = this.experiences.filter((_, i) => i !== index);
    this.errors = this.errors.filter((_, i) => i !== index);
    this.experiencesChange.emit(this.experiences);
  }
}
