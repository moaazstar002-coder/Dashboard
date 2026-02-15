import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHeadCell, TableHeader, TableRow } from '@/components/ui/table';

export function RecentActivity() {
  const activities = [
    { id: 1, user: 'John Doe', action: 'Logged in', timestamp: '2 hours ago' },
    { id: 2, user: 'Jane Smith', action: 'Created product', timestamp: '4 hours ago' },
    { id: 3, user: 'Bob Johnson', action: 'Updated profile', timestamp: '6 hours ago' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeadCell>User</TableHeadCell>
              <TableHeadCell>Action</TableHeadCell>
              <TableHeadCell>Time</TableHeadCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>{activity.user}</TableCell>
                <TableCell>{activity.action}</TableCell>
                <TableCell>{activity.timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
