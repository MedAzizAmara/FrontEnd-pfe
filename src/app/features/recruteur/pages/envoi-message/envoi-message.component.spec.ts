import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewFormComponent } from './components/interview-form/interview-form.component';
import { LetterPreviewComponent } from './components/letter-preview/letter-preview.component';
import { PageHeaderService } from '../../../../services/page-header.service';

@Component({
  selector: 'app-envoi-message',
  standalone: true,
  imports: [
    CommonModule,
    InterviewFormComponent,
    LetterPreviewComponent,
  ],
  templateUrl: './envoi-message.component.html',
  styles: []
})
export class EnvoiMessageComponent implements OnInit {
  societe: string = 'ToutaJob';
  poste: string = 'Développeur Angular';
  telephone: string = '+216 XX XXX XXX';
  email: string = 'contact@toutajob.tn';
  nomRecruteur: string = 'Alex Rivers';
  date: string = '';
  heure: string = '';

  constructor(private pageHeaderService: PageHeaderService) {}

  ngOnInit(): void {
    this.pageHeaderService.setHeader(
      'Rédigez et envoyez une invitation d\'entretien au candidat.'
    );
  }

  onFormChange(event: { date: string; heure: string }): void {
    this.date = event.date;
    this.heure = event.heure;
  }

  onEnvoyer(): void {
    console.log('Invitation envoyée');
    console.log('Société :', this.societe);
    console.log('Poste :', this.poste);
    console.log('Date :', this.date);
    console.log('Heure :', this.heure);
    console.log('Téléphone :', this.telephone);
    console.log('Email :', this.email);
    console.log('Nom recruteur :', this.nomRecruteur);
  }
}
