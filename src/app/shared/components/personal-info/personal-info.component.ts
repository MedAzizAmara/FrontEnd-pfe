import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personal-info.component.html',
})
export class PersonalInfoComponent {
  @Input() isEditing: boolean = false;
  @Input() age: number = 0;
  @Input() permis: string = '';
  @Input() location: string = '';
  @Input() email: string = '';
  @Input() phone: string = '';
}
