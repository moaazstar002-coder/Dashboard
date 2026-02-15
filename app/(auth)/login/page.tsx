import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Login</h1>
      <p>Login form will go here</p>
    </div>
  );
}
