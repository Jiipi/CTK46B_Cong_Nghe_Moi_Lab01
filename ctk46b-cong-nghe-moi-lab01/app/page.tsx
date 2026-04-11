export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#dbeafe,#fef9c3_45%,#ffe4e6)] px-6 py-12 text-slate-800">
      <section className="mx-auto w-full max-w-3xl rounded-3xl border border-white/70 bg-white/85 p-8 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.45)] backdrop-blur sm:p-10">
        <p className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold tracking-wide text-emerald-800">
          Student Profile
        </p>

        <h1 className="mb-3 text-4xl font-black tracking-tight text-sky-900 sm:text-5xl">
          Xin chào! 👋
        </h1>
        <p className="mb-8 text-lg text-slate-600">
          Đây là phiên bản đã tùy chỉnh với thông tin cá nhân và giao diện màu
          sắc mới.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-sky-100 p-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
              Họ và tên
            </p>
            <p className="mt-1 text-xl font-bold text-sky-900">
              Trần Ngọc Hưng
            </p>
          </div>
          <div className="rounded-2xl bg-indigo-100 p-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
              MSSV
            </p>
            <p className="mt-1 text-xl font-bold text-indigo-900">2212377</p>
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
            <p className="mt-1 text-lg font-semibold text-rose-900">
              2212377@dlu.edu.vn
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-base leading-relaxed text-slate-700">
            Môn học: <strong>Các công nghệ mới trong PTPM</strong>
          </p>
          <p className="mt-2 text-base leading-relaxed text-slate-700">
            Sở thích: Thiết kế UI, xây dựng web app, và khám phá các công cụ AI
            cho lập trình.
          </p>
        </div>

        <div className="mt-6 rounded-2xl bg-sky-900 p-5 text-sky-100">
          <p className="text-lg font-semibold">🚀 Mục tiêu học tập</p>
          <p className="mt-2 text-sm sm:text-base">
            Nắm vững Git workflow, làm chủ Next.js cơ bản, và triển khai được
            một project hoàn chỉnh.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl bg-violet-100 p-5 ring-1 ring-violet-200">
            <h2 className="text-lg font-bold text-violet-900">
              🎯 Danh sách sở thích
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-violet-900 sm:text-base">
              <li>Thiết kế giao diện web hiện đại với Tailwind CSS.</li>
              <li>Học cách tối ưu trải nghiệm người dùng trên mobile.</li>
              <li>Khám phá AI tools để tăng tốc quá trình lập trình.</li>
            </ul>
          </article>

          <article className="rounded-2xl bg-emerald-100 p-5 ring-1 ring-emerald-200">
            <h2 className="text-lg font-bold text-emerald-900">
              📚 Mục tiêu học tập tuần này
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-emerald-900 sm:text-base">
              <li>
                Hoàn thành bài lab Git và nắm chắc quy trình merge conflict.
              </li>
              <li>Xây dựng 1 trang Next.js có bố cục responsive hoàn chỉnh.</li>
              <li>
                Triển khai project lên Vercel và kiểm tra metadata chuẩn SEO.
              </li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
