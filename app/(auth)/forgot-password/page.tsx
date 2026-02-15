import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
};

export default function ForgotPasswordPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Forgot Password</h1>
      <p>Password recovery form will go here</p>
    </div>
  );
}
