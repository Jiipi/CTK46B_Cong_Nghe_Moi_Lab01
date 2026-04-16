const projects = [
  {
    title: "Portfolio cá nhân",
    description:
      "Website giới thiệu bản thân xây dựng bằng Next.js, TypeScript và Tailwind CSS.",
    tech: ["Next.JS", "Tailwind CSS", "TypeScript"],
    context: "Bài lab môn Các công nghệ mới trong PTPM",
  },
  {
    title: "Ứng dụng Quản lý Công việc",
    description:
      "Todo App hỗ trợ tạo, cập nhật và lọc công việc, lưu dữ liệu bằng Local Storage.",
    tech: ["React", "TypeScript", "Local Storage"],
    context: "Bài tập thực hành Frontend",
  },
  {
    title: "API Quản lý Sản phẩm",
    description:
      "Xây dựng REST API với phân trang, tìm kiếm, và validate dữ liệu đầu vào.",
    tech: ["Node.js", "Express", "PostgreSQL"],
    context: "Đồ án môn Phát triển ứng dụng web",
  },
  {
    title: "Website Blog học tập",
    description:
      "Trang blog chia sẻ kiến thức học tập, hỗ trợ markdown và phân loại bài viết.",
    tech: ["Next.JS", "MDX", "Tailwind CSS"],
    context: "Project cá nhân",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Dự án</h1>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
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
          </div>
        ))}
      </div>
    </div>
  );
}
