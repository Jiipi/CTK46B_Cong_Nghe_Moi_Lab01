import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="rounded-xl border bg-white p-6 shadow-sm">
      <p className="text-sm text-gray-500">{post.date}</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">{post.title}</h1>
      <p className="mt-2 text-sm font-semibold text-blue-600">
        {post.category}
      </p>

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
