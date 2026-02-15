import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create New User",
};

export default function NewUserPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Create New User</h1>
      <p className="mt-2 text-gray-600">User creation form will go here</p>
    </div>
  );
}
