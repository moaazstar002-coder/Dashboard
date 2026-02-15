'use client';

import { MobileSidebar } from './mobile-sidebar';
import { UserMenu } from './user-menu';
import { SearchBar } from './search-bar';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 border-b bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <MobileSidebar />
          <SearchBar />
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
