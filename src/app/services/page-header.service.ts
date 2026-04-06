import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageHeaderService {

  // Le titre de la page
  titre: string = '';

  // Le sous-titre de la page
  sousTitre: string = '';

  // On appelle cette méthode dans chaque page pour changer le titre
  setHeader(titre: string, sousTitre: string = '') {
    this.titre = titre;
    this.sousTitre = sousTitre;
  }

}
