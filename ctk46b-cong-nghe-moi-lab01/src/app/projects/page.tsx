import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Dự án</h1>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">
              <Link
                href={`/projects/${project.id}`}
                className="hover:text-blue-600 transition-colors"
              >
                {project.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{project.summary}</p>
            <p className="text-sm text-gray-500 mb-4">{project.context}</p>
            <div className="flex gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <Link
              href={`/projects/${project.id}`}
              className="inline-block mt-4 text-sm font-semibold text-blue-600 hover:underline"
            >
              Xem chi tiết →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
