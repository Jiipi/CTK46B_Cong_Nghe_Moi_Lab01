export default function Footer() {
  return (
    <footer className="mt-auto border-t border-emerald-100 bg-emerald-50/70 dark:border-slate-700 dark:bg-slate-900/70">
      <div className="mx-auto max-w-5xl px-4 py-6 text-center text-sm text-slate-600 dark:text-slate-400">
        <p>© 2026 — Trần Ngọc Hưng | CTK46 — Các công nghệ mới trong PTPM</p>
        <div className="mt-2 flex items-center justify-center gap-3">
          <a
            href="https://github.com/Jiipi"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-emerald-700 hover:underline dark:text-emerald-300"
          >
            GitHub
          </a>
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <a
            href="mailto:2212377@dlu.edu.vn"
            className="font-medium text-emerald-700 hover:underline dark:text-emerald-300"
          >
            2212377@dlu.edu.vn
          </a>
        </div>
      </div>
    </footer>
  );
}
