import { NextResponse } from "next/server";

export async function GET() {
  const analyticsData = {
    totalUsers: 1250,
    activeUsers: 856,
    revenue: 45000,
    growth: 12.5,
    chartData: [
      { month: "Jan", value: 400 },
      { month: "Feb", value: 520 },
      { month: "Mar", value: 480 },
      { month: "Apr", value: 640 },
      { month: "May", value: 720 },
    ],
  };

  return NextResponse.json({ data: analyticsData }, { status: 200 });
}
