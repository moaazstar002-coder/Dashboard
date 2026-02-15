import { NextResponse } from "next/server";

// Mock users data
const mockUsers = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Smith", email: "jane@example.com" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com" },
];

export async function GET() {
  return NextResponse.json({ data: mockUsers }, { status: 200 });
}

export async function POST(request: Request) {
  const body = await request.json();

  const newUser = {
    id: String(mockUsers.length + 1),
    name: body.name,
    email: body.email,
  };

  mockUsers.push(newUser);

  return NextResponse.json(
    { success: true, data: newUser },
    { status: 201 }
  );
}
