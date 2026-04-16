export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex-1">{children}</div>

        <aside className="w-full shrink-0 lg:w-64">
          <div className="rounded-lg bg-gray-50 p-4">
            <h3 className="mb-3 font-semibold">Danh mục</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Công nghệ</li>
              <li>Học tập</li>
              <li>Dự án cá nhân</li>
              <li>Cuộc sống</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
