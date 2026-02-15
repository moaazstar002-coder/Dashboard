'use client';

import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import Link from 'next/link';

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden rounded p-2 hover:bg-gray-100"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="mt-6 space-y-2">
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
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
