import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-message-entretien',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './message-entretien.component.html',
  styleUrls: ['./message-entretien.component.css']
})
export class MessageEntretienComponent {
  societe = 'ToutaJob';
  poste = 'Frontend Developer';
  date = '15/04/2026';
  heure = '10:30';
  telephone = '+216 55 123 456';
  email = 'contact@toutajob.com';
  nomRecruteur = 'Aziz Ben Ali';
}
