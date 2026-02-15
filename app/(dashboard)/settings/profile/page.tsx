import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile Settings",
};

export default function ProfileSettingsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Profile Settings</h2>
      <p className="mt-2 text-gray-600">Manage your profile information</p>
    </div>
  );
}
