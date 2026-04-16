export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
        <p>© 2026 — Trần Ngọc Hưng | CTK46 — Các công nghệ mới trong PTPM</p>
        <div className="mt-2 flex items-center justify-center gap-3">
          <a
            href="https://github.com/Jiipi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <span className="text-gray-300">|</span>
          <a
            href="mailto:2212377@dlu.edu.vn"
            className="text-blue-600 hover:underline"
          >
            2212377@dlu.edu.vn
          </a>
        </div>
      </div>
    </footer>
  );
}
