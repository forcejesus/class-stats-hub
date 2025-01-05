export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Teacher extends User {
  subject?: string;
}

export interface Student extends User {
  class?: string;
}