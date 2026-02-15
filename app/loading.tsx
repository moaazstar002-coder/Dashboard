export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="space-y-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600 mx-auto" />
        <p className="text-center text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
