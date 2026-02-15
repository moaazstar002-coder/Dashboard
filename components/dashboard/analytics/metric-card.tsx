import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
}

export function MetricCard({ title, value, unit }: MetricCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">{value}</span>
          {unit && <span className="text-sm text-gray-600">{unit}</span>}
        </div>
      </CardContent>
    </Card>
  );
}
