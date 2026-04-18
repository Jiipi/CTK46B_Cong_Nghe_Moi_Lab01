"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <div className="mx-auto mb-5 h-14 w-14 animate-pulse rounded-full bg-red-100" />
      <h1 className="text-3xl font-bold text-red-600">
        Đã xảy ra lỗi hệ thống
      </h1>
      <p className="mt-3 text-gray-600">
        {error.message || "Có lỗi không mong muốn xảy ra. Vui lòng thử lại."}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => reset()}
          className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
        >
          Thử lại
        </button>
        <Link
          href="/"
          className="rounded-lg border border-gray-300 px-6 py-2 text-gray-700 transition-colors hover:bg-gray-50"
        >
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}
