import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/posts";

interface BlogPostPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  if (slug.length > 1) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          Catch-all route demo
        </p>
        <h1 className="mt-2 text-2xl font-bold text-amber-900">
          /blog/[...slug] đã bắt URL nhiều cấp
        </h1>
        <p className="mt-3 text-amber-800">
          Đường dẫn bạn truy cập: <span className="font-mono">{slug.join("/")}</span>
        </p>
        <p className="mt-2 text-amber-800">
          Với [slug] trước đây, URL dạng /blog/a/b/c sẽ không match route. Với
          catch-all, route vẫn match và bạn có thể xử lý logic tùy ý.
        </p>
        <Link
          href="/blog"
          className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:underline"
        >
          ← Quay lại danh sách blog
        </Link>
      </div>
    );
  }

  const post = getPostBySlug(slug[0]);

  if (!post) {
    notFound();
  }

  return (
    <article className="rounded-xl border bg-white p-6 shadow-sm">
      <p className="text-sm text-gray-500">{post.date}</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">{post.title}</h1>
      <p className="mt-2 text-sm font-semibold text-blue-600">{post.category}</p>
      <p className="mt-1 text-sm text-slate-600">Tác giả: {post.author}</p>

      <div className="mt-6 whitespace-pre-line leading-relaxed text-slate-700">
        {post.content}
      </div>

      <div className="mt-8">
        <Link
          href="/blog"
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          ← Quay lại danh sách bài viết
        </Link>
      </div>
    </article>
  );
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: [post.slug] }));
}