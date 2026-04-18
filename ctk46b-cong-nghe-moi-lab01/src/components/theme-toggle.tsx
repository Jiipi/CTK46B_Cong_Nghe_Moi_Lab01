"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-emerald-50"
      aria-label="Chuyển trạng thái sáng tối"
    >
      <span aria-hidden="true">{isDark ? "🌙" : "☀"}</span>
      <span>{isDark ? "Đang ở chế độ tối" : "Đang ở chế độ sáng"}</span>
    </button>
  );
}
