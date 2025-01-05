import api from '@/lib/axios';
import { LoginRequest, LoginResponse, User } from '@/types/auth';
import { jwtDecode } from 'jwt-decode';

export const authService = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await api.post('/api/login', data);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('token');
  },

  getCurrentUser: (): User | null => {
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