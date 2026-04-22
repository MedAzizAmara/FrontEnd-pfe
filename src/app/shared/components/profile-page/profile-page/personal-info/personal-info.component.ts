import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ValidationService } from '../../../../../services/validation.service';
import { PersonalInfoData } from '../../profile-page.component';

type EditableField =
  | 'email'
  | 'telephone'
  | 'localisation'
  | 'dateNaissance'
  | 'github'
  | 'linkedin'
  | 'portfolio';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {
  @Input({ required: true }) personalInfo!: PersonalInfoData;
  @Output() personalInfoChange = new EventEmitter<PersonalInfoData>();

  @Input() isEditing = false;

  errors: Record<EditableField, string> = {
    email: '',
    telephone: '',
    localisation: '',
    dateNaissance: '',
    github: '',
    linkedin: '',
    portfolio: ''
  };

  constructor(public validationService: ValidationService) {}

  onFieldChange(field: EditableField, value: string): void {
    const next = { ...this.personalInfo, [field]: value };
    this.personalInfo = next;
    this.personalInfoChange.emit(next);
    this.errors[field] = this.validationService.validerPersonalInfo(field, value);
  }
}
