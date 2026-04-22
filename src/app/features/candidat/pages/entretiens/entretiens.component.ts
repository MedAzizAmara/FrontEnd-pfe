import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface EntretienItem {
  id: number;
  societe: string;
  poste: string;
  date: string;
  heure: string;
  nomRecruteur: string;
  lu: boolean;
}

@Component({
  selector: 'app-entretiens',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './entretiens.component.html',
  styleUrls: ['./entretiens.component.css']
})
export class EntretiensComponent {
  entretiens: EntretienItem[] = [
    {
      id: 1,
      societe: 'ToutaJob',
      poste: 'Frontend Developer',
      date: '15/04/2026',
      heure: '10:30',
      nomRecruteur: 'Aziz Ben Ali',
      lu: false
    },
    {
      id: 2,
      societe: 'TechNova',
      poste: 'UI/UX Designer',
      date: '18/04/2026',
      heure: '14:00',
      nomRecruteur: 'Sarra Trabelsi',
      lu: true
    },
    {
      id: 3,
      societe: 'DevSphere',
      poste: 'Angular Developer',
      date: '20/04/2026',
      heure: '09:00',
      nomRecruteur: 'Yassine Gharbi',
      lu: false
    }
  ];

}
