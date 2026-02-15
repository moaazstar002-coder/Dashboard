'use client';

import Link from 'next/link';

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r bg-gray-50 p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
      </div>

      <nav className="space-y-2">
        <Link
          href="/dashboard"
          className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-200"
        >
          Home
        </Link>
        <Link
          href="/analytics"
          className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-200"
        >
          Analytics
        </Link>
        <Link
          href="/users"
          className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-200"
        >
          Users
        </Link>
        <Link
          href="/products"
          className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-200"
        >
          Products
        </Link>
        <Link
          href="/orders"
          className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-200"
        >
          Orders
        </Link>
        <Link
          href="/settings/profile"
          className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-200"
        >
          Settings
        </Link>
      </nav>
    </aside>
  );
}
