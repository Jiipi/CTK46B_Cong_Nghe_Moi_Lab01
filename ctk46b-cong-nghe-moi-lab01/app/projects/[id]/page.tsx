import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/data/projects";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Link
        href="/projects"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Quay lại danh sách dự án
      </Link>

      <article className="rounded-xl border bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">{project.title}</h1>
        <p className="mt-3 text-slate-600">{project.description}</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-800">Bối cảnh:</span>{" "}
            {project.context}
          </p>
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-800">Thời gian:</span>{" "}
            {project.period}
          </p>
        </div>

        <p className="mt-3 text-sm text-slate-600">
          <span className="font-semibold text-slate-800">Vai trò:</span>{" "}
          {project.role}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.github && (
          <div className="mt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              Xem repository GitHub
            </a>
          </div>
        )}
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}
