import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/posts";

interface BlogPostPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  if (slug[0] === "trigger-error") {
    // Intentional runtime error for testing segment error boundary.
    const broken = undefined as unknown as { run: () => void };
    broken.run();
  }

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
          Đường dẫn bạn truy cập:{" "}
          <span className="font-mono">{slug.join("/")}</span>
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
    <div>
      <Link
        href="/blog"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Quay lại danh sách
      </Link>

      <article>
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
            {post.category}
          </span>
          <span className="text-sm text-gray-400">{post.date}</span>
        </div>

        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="mb-6 text-sm text-gray-500">Tác giả: {post.author}</p>

        <div className="prose max-w-none text-gray-700 whitespace-pre-line">
          {post.content}
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: [post.slug],
  }));
}
