import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-4 text-center">
      <h1 className="text-3xl font-bold">User Not Found</h1>
      <p className="text-gray-600">The user you are looking for does not exist.</p>
      <Link
        href="/users"
        className="inline-block rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Back to Users
      </Link>
    </div>
  );
}
