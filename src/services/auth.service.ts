import api from '@/lib/axios';
import { LoginRequest, LoginResponse } from '@/types/auth';

export const authService = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await api.post('/api/login', data);
    return response.data;
  },
};