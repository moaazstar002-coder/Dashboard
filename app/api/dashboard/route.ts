import { NextResponse } from "next/server";

export async function GET() {
  const dashboardStats = {
    totalUsers: 1250,
    totalRevenue: 45000,
    totalOrders: 328,
    conversionRate: 3.24,
    recentActivity: [
      { id: 1, user: "John Doe", action: "Logged in", timestamp: "2 hours ago" },
      {
        id: 2,
        user: "Jane Smith",
        action: "Created new product",
        timestamp: "4 hours ago",
      },
      { id: 3, user: "Bob Johnson", action: "Updated profile", timestamp: "6 hours ago" },
    ],
  };

  return NextResponse.json({ data: dashboardStats }, { status: 200 });
}
