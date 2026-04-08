import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Education {
  period: string;
  school: string;
  degree: string;
}

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './education-section.component.html',
})
export class EducationSectionComponent {
  @Input() isEditing: boolean = false;
  @Input() educations: Education[] = [];

  addEducation() {
    this.educations.push({ period: '', school: '', degree: '' });
  }

  removeEducation(index: number) {
    this.educations.splice(index, 1);
  }
}
