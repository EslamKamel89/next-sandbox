export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-14">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10  animate-pulse">
          <div className="h-10 w-40 bg-gray-300 rounded-lg" />
          <div className="h-10 w-24 bg-gray-900/70 rounded-xl" />
        </div>

        <div className="mb-8 inline-flex items-center gap-2 bg-white/70 backdrop-blur px-4 py-2 rounded-lg border border-gray-200 text-sm shadow-sm w-56  animate-pulse">
          <div className="h-4 w-24 bg-gray-300 rounded" />
          <div className="h-4 w-16 bg-gray-400 rounded" />
        </div>

        <div className="space-y-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100  animate-pulse"
            >
              <div className="h-6 w-3/4 bg-gray-300 rounded mb-4" />

              <div className="space-y-2 mb-5">
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-11/12 bg-gray-200 rounded" />
                <div className="h-4 w-10/12 bg-gray-200 rounded" />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <div className="h-6 w-16 bg-gray-200 rounded-full" />
                <div className="h-6 w-14 bg-gray-200 rounded-full" />
                <div className="h-6 w-20 bg-gray-200 rounded-full" />
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="h-4 w-12 bg-gray-300 rounded" />
                  <div className="h-4 w-12 bg-gray-300 rounded" />
                </div>
                <div className="h-4 w-16 bg-gray-300 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
