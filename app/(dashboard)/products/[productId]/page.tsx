import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details",
};

interface ProductDetailsPageProps {
  params: Promise<{ productId: string }>;
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { productId } = await params;

  return (
    <div>
      <h1 className="text-3xl font-bold">Product Details</h1>
      <p className="mt-2 text-gray-600">Product ID: {productId}</p>
    </div>
  );
}
