import { Injectable } from '@angular/core';

export interface User {
  nom: string;
  role: 'candidat' | 'recruteur' | 'admin';
  avatar?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User | null = null;

  isLoggedIn(): boolean {
    return this.user !== null;
  }

  getUser(): User | null {
    return this.user;
  }

  login(user: User) {
    this.user = user;
  }

  logout() {
    this.user = null;
  }

}
