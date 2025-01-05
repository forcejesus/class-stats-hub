import axios from 'axios';

const api = axios.create({
  baseURL: 'http://kahoot.nos-apps.com',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  // Force HTTP protocol
  if (config.url && config.url.startsWith('https://')) {
    config.url = config.url.replace('https://', 'http://');
  }

  console.log('Request Config:', {
    url: config.url,
    method: config.method,
    headers: config.headers,
    data: config.data
  });
  
  return config;
}, (error) => {
  console.error('Request Error:', error);
  return Promise.reject(error);
});

api.interceptors.response.use(
  (response) => {
    console.log('Response:', response.data);
    return response;
  },
  (error) => {
    console.error('Response Error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });

    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/';
    }

    if (error.code === 'ERR_NETWORK') {
      error.message = "Impossible de se connecter au serveur. Veuillez vérifier votre connexion internet ou réessayer plus tard.";
    }

    return Promise.reject(error);
  }
);

export default api;