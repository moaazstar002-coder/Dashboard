export const mockUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    status: 'active' as const,
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    status: 'active' as const,
    createdAt: new Date('2024-01-20'),
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    status: 'inactive' as const,
    createdAt: new Date('2024-02-01'),
  },
];

export const mockAnalytics = {
  totalUsers: 1250,
  activeUsers: 856,
  revenue: 45000,
  growth: 12.5,
  chartData: [
    { month: 'Jan', value: 400 },
    { month: 'Feb', value: 520 },
    { month: 'Mar', value: 480 },
    { month: 'Apr', value: 640 },
    { month: 'May', value: 720 },
  ],
};

export const mockDashboardStats = {
  totalUsers: 1250,
  totalRevenue: 45000,
  totalOrders: 328,
  conversionRate: 3.24,
  recentActivity: [
    { id: 1, user: 'John Doe', action: 'Logged in', timestamp: '2 hours ago' },
    {
      id: 2,
      user: 'Jane Smith',
      action: 'Created new product',
      timestamp: '4 hours ago',
    },
    { id: 3, user: 'Bob Johnson', action: 'Updated profile', timestamp: '6 hours ago' },
  ],
};
