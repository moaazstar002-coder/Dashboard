interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Switch({ label, ...props }: SwitchProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          props.checked ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            props.checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
    </div>
  );
}
