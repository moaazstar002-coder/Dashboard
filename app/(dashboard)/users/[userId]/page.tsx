import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Details",
};

interface UserDetailsPageProps {
  params: Promise<{ userId: string }>;
}

export default async function UserDetailsPage({
  params,
}: UserDetailsPageProps) {
  const { userId } = await params;

  return (
    <div>
      <h1 className="text-3xl font-bold">User Details</h1>
      <p className="mt-2 text-gray-600">User ID: {userId}</p>
    </div>
  );
}
