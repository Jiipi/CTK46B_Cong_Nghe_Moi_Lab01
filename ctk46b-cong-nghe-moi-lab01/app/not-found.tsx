import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-24 text-center">
      <div className="relative mx-auto mb-8 h-28 w-28">
        <div className="absolute inset-0 animate-pulse rounded-full bg-sky-100" />
        <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-sky-500 bg-white" />
        <div
          className="absolute h-10 w-2 rounded bg-sky-500"
          style={{ left: "68%", top: "63%", transform: "rotate(45deg)" }}
        />
      </div>

      <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4">Trang không tồn tại</h2>
      <p className="text-gray-600 mb-8">
        Xin lỗi, trang bạn đang tìm kiếm không có trên website này.
      </p>

      <div className="mb-8 flex justify-center gap-2">
        <span
          className="h-2.5 w-2.5 animate-bounce rounded-full bg-sky-500"
          style={{ animationDelay: "0ms" }}
        />
        <span
          className="h-2.5 w-2.5 animate-bounce rounded-full bg-sky-400"
          style={{ animationDelay: "120ms" }}
        />
        <span
          className="h-2.5 w-2.5 animate-bounce rounded-full bg-sky-300"
          style={{ animationDelay: "240ms" }}
        />
      </div>

      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
      >
        Về trang chủ
      </Link>
    </div>
  );
}
