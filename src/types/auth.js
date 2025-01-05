// Types are removed since we're using JavaScript
export const LoginCredentials = {
  email: '',
  password: ''
};

export const AuthResponse = {
  token: ''
};

export const School = {
  _id: '',
  libelle: '',
  adresse: '',
  ville: ''
};

export const User = {
  id: '',
  name: '',
  email: '',
  ecole: School
};

// Aliases for the auth service
export const LoginRequest = LoginCredentials;
export const LoginResponse = AuthResponse;