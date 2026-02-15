import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
};

export default function UsersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Users Management</h1>
      <p className="mt-2 text-gray-600">Users list will go here</p>
    </div>
  );
}
