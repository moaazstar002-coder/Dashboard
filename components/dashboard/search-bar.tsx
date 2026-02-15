'use client';

import { Input } from '@/components/ui/input';

export function SearchBar() {
  return (
    <div className="hidden md:block">
      <Input
        type="search"
        placeholder="Search..."
        className="w-64"
      />
    </div>
  );
}
