import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-header.component.html',
})
export class ProfileHeaderComponent {
  @Input() fullName: string = '';
  @Input() jobTitle: string = '';
  @Input() avatarUrl: string = '';
  @Input() isOwner: boolean = false;
  @Input() isEditing: boolean = false;

  @Output() editClicked = new EventEmitter<void>();
  @Output() saveClicked = new EventEmitter<void>();
  @Output() jobTitleChanged = new EventEmitter<string>();
  @Output() avatarChanged = new EventEmitter<string>();

  onJobTitleChange(value: string) {
    this.jobTitleChanged.emit(value);
  }

  onAvatarChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.avatarChanged.emit(reader.result as string);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}
