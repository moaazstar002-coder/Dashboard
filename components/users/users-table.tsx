import { Table, TableBody, TableCell, TableHeadCell, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';

interface User {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive';
}

interface UsersTableProps {
  users?: User[];
}

export function UsersTable({ users = [] }: UsersTableProps) {
  const mockUsers: User[] = [
    { id: '1', name: 'John Doe', email: 'john@example.com', status: 'active' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'active' },
    { id: '3', name: 'Bob Johnson', email: 'bob@example.com', status: 'inactive' },
  ];

  const displayUsers = users.length > 0 ? users : mockUsers;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Email</TableHeadCell>
          <TableHeadCell>Status</TableHeadCell>
          <TableHeadCell>Actions</TableHeadCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {displayUsers.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <span
                className={`inline-block rounded px-2 py-1 text-xs ${
                  user.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {user.status}
              </span>
            </TableCell>
            <TableCell>
              <Link
                href={`/users/${user.id}`}
                className="text-blue-600 hover:underline"
              >
                View
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
