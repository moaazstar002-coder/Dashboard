export const ROUTES = {
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    LOGOUT: '/api/auth/logout',
  },
  DASHBOARD: {
    HOME: '/dashboard',
    ANALYTICS: '/analytics',
    USERS: '/users',
    USER_DETAIL: (id: string) => `/users/${id}`,
    USER_NEW: '/users/new',
    PRODUCTS: '/products',
    PRODUCT_DETAIL: (id: string) => `/products/${id}`,
    ORDERS: '/orders',
    PROFILE: '/profile',
    SETTINGS: {
      HOME: '/settings',
      PROFILE: '/settings/profile',
      APPEARANCE: '/settings/appearance',
      NOTIFICATIONS: '/settings/notifications',
      SECURITY: '/settings/security',
    },
  },
  API: {
    AUTH: '/api/auth',
    LOGOUT: '/api/auth/logout',
    USERS: '/api/users',
    USER_DETAIL: (id: string) => `/api/users/${id}`,
    ANALYTICS: '/api/analytics',
    DASHBOARD: '/api/dashboard',
  },
};

export const COLORS = {
  PRIMARY: '#2563eb',
  SECONDARY: '#64748b',
  SUCCESS: '#16a34a',
  DANGER: '#dc2626',
  WARNING: '#ea580c',
  INFO: '#0284c7',
};

export const TOAST_DURATION = 3000;

export const ITEMS_PER_PAGE = 10;
