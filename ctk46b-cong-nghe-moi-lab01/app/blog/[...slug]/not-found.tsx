import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <div className="rounded-xl border bg-white p-8 text-center shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-red-500">
        404 - Not Found
      </p>
      <h1 className="mt-2 text-2xl font-bold text-slate-900">
        Không tìm thấy bài viết
      </h1>
      <p className="mt-3 text-slate-600">
        Bài viết bạn đang tìm không tồn tại hoặc đã bị thay đổi đường dẫn.
      </p>
      <Link
        href="/blog"
        className="mt-6 inline-block text-sm font-semibold text-emerald-600 hover:underline"
      >
        ← Quay lại danh sách blog
      </Link>
    </div>
  );
}