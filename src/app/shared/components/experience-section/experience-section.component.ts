import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Experience {
  title: string;
  company: string;
  period: string;
  tasks: string[];
}

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './experience-section.component.html',
})
export class ExperienceSectionComponent {
  @Input() isEditing: boolean = false;
  @Input() experiences: Experience[] = [];

  addExperience() {
    this.experiences.push({ title: '', company: '', period: '', tasks: [] });
  }

  removeExperience(index: number) {
    this.experiences.splice(index, 1);
  }

  addTask(exp: Experience) {
    exp.tasks.push('');
  }

  removeTask(exp: Experience, taskIndex: number) {
    exp.tasks.splice(taskIndex, 1);
  }
}
