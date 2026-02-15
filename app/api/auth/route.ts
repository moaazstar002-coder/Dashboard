import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // Mock authentication logic
  if (body.email && body.password) {
    return NextResponse.json(
      {
        success: true,
        message: "Authentication successful",
        user: {
          id: "1",
          email: body.email,
          name: "User Name",
        },
      },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { success: false, message: "Invalid credentials" },
    { status: 401 }
  );
}
