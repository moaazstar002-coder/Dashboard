import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">My Profile</h1>
      <p className="mt-2 text-gray-600">Profile information will go here</p>
    </div>
  );
}
