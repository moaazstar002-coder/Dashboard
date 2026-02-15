import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appearance Settings",
};

export default function AppearanceSettingsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Appearance Settings</h2>
      <p className="mt-2 text-gray-600">Customize your dashboard appearance</p>
    </div>
  );
}
