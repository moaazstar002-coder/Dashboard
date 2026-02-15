interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}

export function Tabs({ defaultValue, children, className = "" }: TabsProps) {
  return <div className={className}>{children}</div>;
}

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

export function TabsList({ children, className = "" }: TabsListProps) {
  return <div className={`flex border-b border-gray-200 ${className}`}>{children}</div>;
}

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function TabsTrigger({ value, children, className = "" }: TabsTriggerProps) {
  return (
    <button
      className={`border-b-2 border-transparent px-4 py-2 text-sm font-medium hover:border-blue-600 hover:text-blue-600 ${className}`}
    >
      {children}
    </button>
  );
}

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function TabsContent({ value, children, className = "" }: TabsContentProps) {
  return <div className={className}>{children}</div>;
}
