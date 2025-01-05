import api from '@/lib/axios';
import { LoginCredentials, AuthResponse, User } from '@/types/auth';
import { jwtDecode } from 'jwt-decode';

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    console.log('Envoi de la requête de connexion:', credentials);
    try {
      const { data } = await api.post<AuthResponse>('/login', credentials);
      console.log('Réponse de la requête de connexion:', data);
      return data;
    } catch (error) {
      console.error('Erreur lors de la requête de connexion:', error);
      throw error;
    }
  },
  
  logout() {
    localStorage.removeItem('token');
  },
  
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  },

  getCurrentUser(): User | null {
    const token = localStorage.getItem('token');
    if (!token) return null;
    
    try {
      const decoded = jwtDecode<User>(token);
      return {
        id: decoded.id,
        name: decoded.name,
        email: decoded.email,
        ecole: decoded.ecole
      };
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
};