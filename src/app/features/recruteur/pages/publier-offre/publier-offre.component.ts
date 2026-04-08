import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PageHeaderService } from '../../../../services/page-header.service';

@Component({
  selector: 'app-publier-offre',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './publier-offre.component.html',
  styles: []
})
export class PublierOffreComponent implements OnInit {

  offre = {
    titre: '',
    contrat: 'cdi',
    localisation: '',
    datePublication: '',
    description: '',
    competences: ''
  };

  constructor(
    private router: Router,
    private pageHeaderService: PageHeaderService
  ) {}

  ngOnInit() {

  }

  onPublier(): void {
    console.log('Offre publiée:', this.offre);
    this.router.navigate(['/recruteur/mes-offres']);
  }

  onAnnuler(): void {
    this.router.navigate(['/recruteur/mes-offres']);
  }
}
