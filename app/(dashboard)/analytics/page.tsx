import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics",
};

export default function AnalyticsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Analytics</h1>
      <p className="mt-2 text-gray-600">Analytics data will go here</p>
    </div>
  );
}
