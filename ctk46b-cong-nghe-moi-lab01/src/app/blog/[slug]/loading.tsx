export default function BlogPostLoading() {
  return (
    <div>
      <div className="mb-6 h-4 w-40 animate-pulse rounded bg-gray-200" />

      <article className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="mb-4 flex gap-3">
          <div className="h-5 w-20 animate-pulse rounded bg-gray-200" />
          <div className="h-5 w-24 animate-pulse rounded bg-gray-200" />
        </div>

        <div className="mb-3 h-8 w-3/4 animate-pulse rounded bg-gray-200" />
        <div className="mb-6 h-4 w-40 animate-pulse rounded bg-gray-200" />

        <div className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
        </div>
      </article>
    </div>
  );
}
