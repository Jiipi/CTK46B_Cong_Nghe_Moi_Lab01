export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#dbeafe,#f8fafc_45%,#e0f2fe)] px-6 py-12 text-slate-800">
      <section className="mx-auto w-full max-w-5xl rounded-3xl border border-white/70 bg-white/90 p-8 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.45)] backdrop-blur sm:p-10">
        <p className="mb-4 inline-block rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold tracking-wide text-sky-700">
          Trang chủ
        </p>

        <h1 className="mb-3 text-4xl font-black tracking-tight text-sky-900 sm:text-5xl">
          Xin chào! Tôi là Trần Ngọc Hưng
        </h1>
        <p className="mb-8 text-lg text-slate-600">
          Sinh viên Công nghệ Thông tin tại Đại học Đà Lạt, đam mê phát triển
          web với React, Next.js và TypeScript.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-sky-100 p-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
              Họ và tên
            </p>
            <p className="mt-1 text-lg font-bold text-sky-900">
              Trần Ngọc Hưng
            </p>
          </div>

          <div className="rounded-2xl bg-indigo-100 p-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
              MSSV
            </p>
            <p className="mt-1 text-lg font-bold text-indigo-900">2212377</p>
          </div>

          <div className="rounded-2xl bg-amber-100 p-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
              Lớp
            </p>
            <p className="mt-1 text-lg font-semibold text-amber-900">CTK46B</p>
          </div>

          <div className="rounded-2xl bg-rose-100 p-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-rose-700">
              Email
            </p>
            <a
              href="mailto:2212377@dlu.edu.vn"
              className="mt-1 block text-sm font-semibold text-rose-900 hover:underline"
            >
              2212377@dlu.edu.vn
            </a>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-base leading-relaxed text-slate-700">
            GitHub:{" "}
            <a
              href="https://github.com/Jiipi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-700 hover:underline"
            >
              github.com/Jiipi
            </a>
          </p>
          <p className="mt-2 text-base leading-relaxed text-slate-700">
            Mục tiêu: Xây dựng các sản phẩm web có trải nghiệm tốt, tối ưu hiệu
            năng và triển khai thực tế trên cloud.
          </p>
        </div>
      </section>
    </main>
  );
}
