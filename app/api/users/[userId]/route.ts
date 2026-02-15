import { NextResponse } from "next/server";

interface Params {
  userId: string;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<Params> }
) {
  const { userId } = await params;

  // Mock user data
  const user = {
    id: userId,
    name: "User Name",
    email: "user@example.com",
  };

  return NextResponse.json({ data: user }, { status: 200 });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<Params> }
) {
  const { userId } = await params;
  const body = await request.json();

  const updatedUser = {
    id: userId,
    name: body.name,
    email: body.email,
  };

  return NextResponse.json(
    { success: true, data: updatedUser },
    { status: 200 }
  );
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<Params> }
) {
  const { userId } = await params;

  return NextResponse.json(
    { success: true, message: `User ${userId} deleted` },
    { status: 200 }
  );
}
