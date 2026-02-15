import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Settings",
};

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settingsTabs = [
    { href: "/settings/profile", label: "Profile" },
    { href: "/settings/appearance", label: "Appearance" },
    { href: "/settings/notifications", label: "Notifications" },
    { href: "/settings/security", label: "Security" },
  ];

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Settings</h1>

      {/* Tabs Navigation */}
      <div className="mb-6 flex gap-2 border-b">
        {settingsTabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className="border-b-2 border-transparent px-4 py-2 hover:border-blue-600 hover:text-blue-600"
          >
            {tab.label}
          </Link>
        ))}
      </div>

      {/* Content */}
      {children}
    </div>
  );
}
