import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  isOpen: boolean = true;

  toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
