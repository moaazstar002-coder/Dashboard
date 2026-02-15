interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Avatar({
  src,
  alt = "Avatar",
  initials,
  size = "md",
  className = "",
}: AvatarProps) {
  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
  };

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-blue-500 text-white font-medium ${sizeClasses[size]} ${className}`}
    >
      {src ? <img src={src} alt={alt} className="h-full w-full rounded-full" /> : initials}
    </div>
  );
}
