interface DropdownMenuProps {
  children: React.ReactNode;
  className?: string;
}

export function DropdownMenu({ children, className = "" }: DropdownMenuProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      {children}
    </div>
  );
}

interface DropdownMenuTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export function DropdownMenuTrigger({
  children,
}: DropdownMenuTriggerProps) {
  return <div>{children}</div>;
}

interface DropdownMenuContentProps {
  children: React.ReactNode;
  align?: "start" | "center" | "end";
}

export function DropdownMenuContent({
  children,
  align = "start",
}: DropdownMenuContentProps) {
  const alignClasses = {
    start: "left-0",
    center: "left-1/2 -translate-x-1/2",
    end: "right-0",
  };

  return (
    <div
      className={`absolute top-full mt-2 ${alignClasses[align]} w-48 rounded-md border border-gray-200 bg-white py-1 shadow-md`}
    >
      {children}
    </div>
  );
}

interface DropdownMenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function DropdownMenuItem({
  children,
  onClick,
}: DropdownMenuItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
    >
      {children}
    </button>
  );
}

export function DropdownMenuSeparator() {
  return <div className="my-1 border-t border-gray-200" />;
}
