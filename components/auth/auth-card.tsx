import { Card } from '@/components/ui/card';

interface AuthCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function AuthCard({ title, description, children }: AuthCardProps) {
  return (
    <Card className="w-full space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
      {children}
    </Card>
  );
}
