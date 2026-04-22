import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-application-actions',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './job-application-actions.component.html',
})
export class JobApplicationActionsComponent {
  @Input() chargement = false;
  @Input() disabled = false;
  @Input() texteBouton = 'Envoyer la candidature';

  @Output() submitClicked = new EventEmitter<void>();
}
