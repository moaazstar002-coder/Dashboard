interface TableProps {
  children: React.ReactNode;
  className?: string;
}

export function Table({ children, className = "" }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className={`w-full border-collapse ${className}`}>{children}</table>
    </div>
  );
}

export function TableHeader({ children, className = "" }: TableProps) {
  return <thead className={`bg-gray-100 ${className}`}>{children}</thead>;
}

export function TableBody({ children, className = "" }: TableProps) {
  return <tbody className={className}>{children}</tbody>;
}

export function TableRow({ children, className = "" }: TableProps) {
  return <tr className={`border-b border-gray-200 hover:bg-gray-50 ${className}`}>{children}</tr>;
}

export function TableCell({ children, className = "" }: TableProps) {
  return <td className={`px-4 py-3 text-sm ${className}`}>{children}</td>;
}

export function TableHeadCell({ children, className = "" }: TableProps) {
  return (
    <th className={`px-4 py-3 text-left text-sm font-semibold text-gray-900 ${className}`}>
      {children}
    </th>
  );
}
