import api from '@/lib/axios';
import { LoginCredentials, AuthResponse } from '@/types/auth';

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const { data } = await api.post<AuthResponse>('/login', credentials);
    return data;
  },
  
  logout() {
    localStorage.removeItem('token');
  },
  
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
};