import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function OverviewChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
          <p className="text-gray-500">Chart will be displayed here</p>
        </div>
      </CardContent>
    </Card>
  );
}
