import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ValidationService } from '../../../../../services/validation.service';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent {
  @Input() competences: string[] = [];
  @Output() competencesChange = new EventEmitter<string[]>();
  @Input() isEditing = false;

  errors: string[] = [];

  constructor(private validationService: ValidationService) {}

  onSkillChange(index: number, value: string): void {
    const next = [...this.competences];
    next[index] = value;
    this.competences = next;
    this.competencesChange.emit(next);
    this.errors[index] = this.validationService.validerCompetence(value, next, index);
  }

  addSkill(): void {
    this.competences = [...this.competences, ''];
    this.errors = [...this.errors, ''];
    this.competencesChange.emit(this.competences);
  }

  removeSkill(index: number): void {
    this.competences = this.competences.filter((_, i) => i !== index);
    this.errors = this.errors.filter((_, i) => i !== index);
    this.competencesChange.emit(this.competences);
  }
}
