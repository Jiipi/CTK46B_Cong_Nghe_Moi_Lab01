import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="rounded-xl border bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-500">
          404 - Not Found
        </p>
        <h1 className="mt-2 text-2xl font-bold text-slate-900">
          Không tìm thấy dự án
        </h1>
        <Link
          href="/projects"
          className="mt-6 inline-block text-sm font-semibold text-blue-600 hover:underline"
        >
          ← Quay lại danh sách dự án
        </Link>
      </div>
    </div>
  );
}
