import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MessageRecu } from '../../../../../../models/message-recu.model';

@Component({
  selector: 'app-dashboard-messages-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard-messages-section.component.html',
  styleUrls: ['./dashboard-messages-section.component.css']
})
export class DashboardMessagesSectionComponent {
  @Input() messages: MessageRecu[] = [];
}
