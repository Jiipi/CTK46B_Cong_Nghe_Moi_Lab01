import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/posts";
import LikeButton from "@/components/like-button";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Link
        href="/blog"
        className="mb-6 inline-block text-sm text-emerald-600 hover:underline"
      >
        ← Quay lại danh sách
      </Link>

      <article>
        <div className="mb-4 flex items-center gap-3">
          <span className="rounded bg-emerald-100 px-2 py-1 text-xs text-emerald-700">
            {post.category}
          </span>
          <span className="text-sm text-gray-400">{post.date}</span>
        </div>

        <h1 className="mb-2 text-3xl font-bold">{post.title}</h1>
        <p className="mb-6 text-sm text-slate-500">Tác giả: {post.author}</p>

        <div className="prose mb-8 max-w-none whitespace-pre-line text-slate-700">
          {post.content}
        </div>

        <div className="border-t pt-6">
          <LikeButton />
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
