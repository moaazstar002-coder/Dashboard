import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orders",
};

export default function OrdersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Orders Management</h1>
      <p className="mt-2 text-gray-600">Orders list will go here</p>
    </div>
  );
}
