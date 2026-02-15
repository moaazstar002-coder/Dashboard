import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notification Settings",
};

export default function NotificationsSettingsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Notification Settings</h2>
      <p className="mt-2 text-gray-600">Manage your notification preferences</p>
    </div>
  );
}
