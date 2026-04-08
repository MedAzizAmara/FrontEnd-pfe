import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-card.component.html',
})
export class JobCardComponent {
  @Input() title!: string;
  @Input() company!: string;
  @Input() email!: string;
  @Input() location!: string;
  @Input() logoUrl!: string;
  @Input() statut: string = 'Nouveau';
  @Output() accepter = new EventEmitter<void>();
  @Output() refuser = new EventEmitter<void>();
}
