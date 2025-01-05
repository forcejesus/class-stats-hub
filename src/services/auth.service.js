import api from '@/lib/axios';
import { jwtDecode } from 'jwt-decode';

export const authService = {
  login: async (data) => {
    const response = await api.post('/api/login', data);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },

  getCurrentUser: () => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    
    try {
      const decoded = jwtDecode(token);
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