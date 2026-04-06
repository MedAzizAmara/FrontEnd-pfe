import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-header.component.html',
})
export class ProfileHeaderComponent {
  @Input() photoUrl: string = '';
  @Input() nom: string = '';
  @Input() titre: string = '';
}
