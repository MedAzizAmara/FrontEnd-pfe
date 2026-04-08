import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface SkillGroup {
  groupTitle: string;
  skills: string[];
}

export interface Language {
  name: string;
  level: string;
  percent: number;
  note?: string;
}

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skills-section.component.html',
})
export class SkillsSectionComponent {
  @Input() isEditing: boolean = false;
  @Input() skillGroups: SkillGroup[] = [];
  @Input() languages: Language[] = [];

  addSkill(group: SkillGroup) {
    group.skills.push('');
  }

  removeSkill(group: SkillGroup, index: number) {
    group.skills.splice(index, 1);
  }

  addLanguage() {
    this.languages.push({ name: '', level: 'A1', percent: 16 });
  }

  removeLanguage(index: number) {
    this.languages.splice(index, 1);
  }

  onLevelChange(lang: Language) {
    const map: { [k: string]: number } = {
      A1: 16, A2: 32, B1: 48, B2: 64, C1: 80, C2: 100,
    };
    lang.percent = map[lang.level] ?? 50;
  }
}
