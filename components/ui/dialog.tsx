interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative max-h-[90vh] w-full max-w-md overflow-auto rounded-lg bg-white p-6 shadow-lg">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
}

export function DialogContent({ children, className = "" }: DialogContentProps) {
  return <div className={className}>{children}</div>;
}

export function DialogHeader({ children, className = "" }: DialogContentProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function DialogTitle({ children, className = "" }: DialogContentProps) {
  return <h2 className={`text-lg font-semibold text-gray-900 ${className}`}>{children}</h2>;
}

export function DialogFooter({ children, className = "" }: DialogContentProps) {
  return <div className={`mt-6 flex justify-end gap-3 ${className}`}>{children}</div>;
}
