import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
};

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Products Management</h1>
      <p className="mt-2 text-gray-600">Products list will go here</p>
    </div>
  );
}
