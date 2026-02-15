interface ErrorMessageProps {
  title: string;
  message: string;
}

export function ErrorMessage({ title, message }: ErrorMessageProps) {
  return (
    <div className="rounded-md border border-red-200 bg-red-50 p-4 text-red-900">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm">{message}</p>
    </div>
  );
}
