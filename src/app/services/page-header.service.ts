import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PageHeaderService {

  stats: { label: string; valeur: number }[] = [];
  titre = '';

  setStats(stats: { label: string; valeur: number }[]): void {
    this.stats = stats;
  }

  setHeader(titre: string): void {
    this.titre = titre;
    this.stats = [];
  }

  clear(): void {
    this.stats = [];
    this.titre = '';
  }
}
