interface AlertProps {
  children: React.ReactNode;
  variant?: "default" | "destructive" | "success";
  className?: string;
}

export function Alert({
  children,
  variant = "default",
  className = "",
}: AlertProps) {
  const variantClasses = {
    default: "border-blue-200 bg-blue-50 text-blue-900",
    destructive: "border-red-200 bg-red-50 text-red-900",
    success: "border-green-200 bg-green-50 text-green-900",
  };

  return (
    <div className={`rounded-md border p-4 ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}

export function AlertTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`font-medium ${className}`}>{children}</h3>;
}

export function AlertDescription({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-sm ${className}`}>{children}</p>;
}
