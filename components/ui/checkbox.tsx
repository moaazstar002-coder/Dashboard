interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600"
        {...props}
      />
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
    </div>
  );
}
