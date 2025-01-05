import api from '@/lib/axios';
import { LoginCredentials, AuthResponse, User } from '@/types/auth';
import { jwtDecode } from 'jwt-decode';

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const { data } = await api.post<AuthResponse>('/api/login', credentials);
    return data;
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