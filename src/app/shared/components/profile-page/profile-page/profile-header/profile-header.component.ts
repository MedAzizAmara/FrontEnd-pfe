import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoData } from '../../profile-page.component';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent {
  @Input() personalInfo!: PersonalInfoData;
  @Input() isEditing = false;

  @Output() toggleEdit = new EventEmitter<void>();
  @Output() cancelEdit = new EventEmitter<void>();

  get initials(): string {
    if (!this.personalInfo?.nomComplet) return 'AA';

    return this.personalInfo.nomComplet
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(part => part[0].toUpperCase())
      .join('');
  }
}
