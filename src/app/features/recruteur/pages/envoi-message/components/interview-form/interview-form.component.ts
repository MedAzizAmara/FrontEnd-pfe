import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interview-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './interview-form.component.html',
  styles: []
})
export class InterviewFormComponent {

  @Input() societe: string = '';
  @Input() poste: string = '';
  @Input() telephone: string = '';
  @Input() email: string = '';
  @Input() nomRecruteur: string = '';

  @Output() envoyer = new EventEmitter<void>();
  @Output() formChange = new EventEmitter<{date: string, heure: string}>();

  date: string = '';
  heure: string = '';

  onDateChange(): void {
    this.formChange.emit({ date: this.date, heure: this.heure });
  }

  onHeureChange(): void {
    this.formChange.emit({ date: this.date, heure: this.heure });
  }
}
