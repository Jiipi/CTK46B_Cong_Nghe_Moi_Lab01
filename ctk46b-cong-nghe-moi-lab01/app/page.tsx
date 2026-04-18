import Link from "next/link";
import Counter from "@/components/counter";

export default function HomePage() {
  return (
    <div className="relative isolate mx-auto max-w-5xl px-4 py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-60 rounded-3xl bg-linear-to-br from-emerald-100/80 via-violet-100/70 to-orange-100/80 blur-3xl dark:from-emerald-900/40 dark:via-violet-900/30 dark:to-orange-900/40" />

      {/* Hero section */}
      <div className="mb-16 text-center">
        <div className="mx-auto mb-6 grid h-24 w-24 place-items-center rounded-full bg-emerald-100 text-4xl font-bold text-emerald-700 ring-4 ring-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-300 dark:ring-emerald-700/50">
          H
        </div>

        <h1 className="mb-4 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
          Xin chào! Tôi là{" "}
          <span className="bg-linear-to-r from-emerald-600 via-violet-600 to-orange-500 bg-clip-text text-transparent">
            Trần Ngọc Hưng
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-slate-600 dark:text-slate-300">
          Sinh viên năm 4 ngành Công nghệ Thông tin tại Đại học Đà Lạt (MSSV:
          2212377), lớp CTK46B. Đam mê phát triển web và khám phá các công nghệ
          mới.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-200/70 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 dark:shadow-emerald-900/30"
          >
            Xem dự án
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Liên hệ
          </Link>
        </div>

        <div className="mt-6 flex flex-col items-center gap-2">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Bộ đếm tương tác
          </p>
          <Counter />
        </div>
      </div>

      {/* Skills section */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold">Kỹ năng</h2>
        <div className="grid auto-rows-fr grid-cols-2 gap-4 md:grid-cols-4">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.JS",
            "Tailwind CSS",
            "Node.js",
            "Git",
            "SQL",
          ].map((skill) => (
            <div
              key={skill}
              className="odd:rotate-1 even:-rotate-1 rounded-xl bg-white/85 p-4 text-center font-medium text-slate-700 ring-1 ring-inset ring-slate-200 outline-1 outline-transparent shadow-[0_8px_24px_-16px_rgba(16,185,129,0.65)] transition-all duration-300 motion-safe:transform-gpu motion-reduce:transform-none hover:scale-[1.03] hover:-translate-y-0.5 hover:rotate-0 hover:bg-emerald-50 hover:ring-emerald-300 hover:outline-emerald-300 hover:outline-offset-2 dark:bg-slate-900/80 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-800"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="rounded-2xl bg-linear-to-r from-emerald-50 via-violet-50 to-orange-50 p-8 text-center ring-1 ring-emerald-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 dark:ring-slate-700">
        <h2 className="mb-3 text-2xl font-bold">Đọc Blog của tôi</h2>
        <p className="mb-4 text-slate-600 dark:text-slate-300">
          Chia sẻ kiến thức và kinh nghiệm về lập trình, công nghệ
        </p>
        <Link
          href="/blog"
          className="font-semibold text-emerald-700 transition-colors hover:text-violet-700 hover:underline dark:text-emerald-300 dark:hover:text-violet-300"
        >
          Xem blog →
        </Link>
      </div>
    </div>
  );
}
