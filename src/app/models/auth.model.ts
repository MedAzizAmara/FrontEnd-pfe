export interface LoginRequest {
  email: string;
  motDePasse: string;
}

export interface LoginResponse {
  token: string;
  role: string;
  nom: string;
  prenom: string;
  userId: number;
}

export interface RegisterCandidatRequest {
  nom: string;
  prenom: string;
  email: string;
  motDePasse: string;
}

export interface RegisterRecruteurRequest {
  nom: string;
  prenom: string;
  email: string;
  motDePasse: string;
  entreprise: string;
  patente: File;
}
