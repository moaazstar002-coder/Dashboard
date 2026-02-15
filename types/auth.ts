export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  status: 'active' | 'inactive';
  createdAt: Date;
}

export interface AuthSession {
  user: User | null;
  isAuthenticated: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}
