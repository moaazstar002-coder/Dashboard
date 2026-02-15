import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Settings",
};

export default function SecuritySettingsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Security Settings</h2>
      <p className="mt-2 text-gray-600">Manage your account security</p>
    </div>
  );
}
