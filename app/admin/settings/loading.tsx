export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-24">
        <div className="space-y-6">
          {/* Header Skeleton */}
          <div className="flex items-center justify-between">
            <div>
              <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 w-96 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="flex space-x-2">
              <div className="h-10 w-20 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Tabs Skeleton */}
          <div className="space-y-6">
            <div className="flex space-x-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>

            {/* Settings Form Skeleton */}
            <div className="bg-white p-6 rounded-lg shadow space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
