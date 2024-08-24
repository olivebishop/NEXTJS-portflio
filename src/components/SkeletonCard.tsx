export default function SkeletonCard() {
    return (
      <div className="animate-pulse p-4 border border-gray-300 dark:border-gray-700 rounded-lg">
        <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    )
  }