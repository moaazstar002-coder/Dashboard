export interface DashboardStats {
  totalUsers: number;
  totalRevenue: number;
  totalOrders: number;
  conversionRate: number;
}

export interface ChartDataPoint {
  month: string;
  value: number;
}

export interface ActivityLog {
  id: number;
  user: string;
  action: string;
  timestamp: string;
}
