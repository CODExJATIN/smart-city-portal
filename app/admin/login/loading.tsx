export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-24">
        <div className="max-w-md mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-6">
              <div className="mx-auto mb-4 h-16 w-16 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-8 w-32 bg-gray-200 rounded animate-pulse mx-auto mb-2"></div>
              <div className="h-4 w-48 bg-gray-200 rounded animate-pulse mx-auto"></div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
