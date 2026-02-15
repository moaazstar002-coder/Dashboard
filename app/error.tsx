"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
        <p className="text-gray-600">Something went wrong.</p>
        {error.message && (
          <p className="text-sm text-gray-500">{error.message}</p>
        )}
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </div>
  );
}
