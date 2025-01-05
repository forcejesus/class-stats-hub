export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export interface School {
  _id: string;
  libelle: string;
  adresse: string;
  ville: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  ecole: School;
}

// Aliases for the auth service
export type LoginRequest = LoginCredentials;
export type LoginResponse = AuthResponse;