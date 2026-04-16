const posts = [
  {
    title: "Bắt đầu với Next.js App Router",
    date: "2026-04-10",
    excerpt: "Tóm tắt trải nghiệm dựng cấu trúc trang và route cơ bản.",
  },
  {
    title: "Tailwind CSS cho layout portfolio",
    date: "2026-04-12",
    excerpt: "Một số mẹo để tạo giao diện gọn và responsive nhanh.",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.title} className="rounded-lg border p-5">
            <p className="text-sm text-gray-500">{post.date}</p>
            <h2 className="mt-1 text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-gray-600">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
