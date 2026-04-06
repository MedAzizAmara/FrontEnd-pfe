import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patent-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patent-viewer.component.html',
})
export class PatentViewerComponent {

  // Image du document (si c'est une image)
  @Input() imageUrl: string = '';

  // Nom du fichier PDF (si c'est un PDF)
  @Input() pdfNom: string = '';

}
