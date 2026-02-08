export default function Dashboard() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-2">JOTIK Dashboard</h1>
      <p className="text-gray-600">Campaign data will appear here after TikTok login.</p>

      <div className="mt-6 rounded-lg border bg-white p-4">
        <p className="font-medium">Status</p>
        <p className="text-sm text-gray-600">Not connected yet.</p>
      </div>
    </main>
  );
}
