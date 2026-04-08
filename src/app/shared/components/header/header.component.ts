import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { PageHeaderService } from '../../../services/page-header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {

  constructor(
    public pageHeaderService: PageHeaderService,
    private location: Location
  ) {}

  goBack() {
    this.location.back();
  }
}
