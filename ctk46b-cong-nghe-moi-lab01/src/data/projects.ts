export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  context: string;
  role: string;
  period: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: "portfolio-nextjs",
    title: "Portfolio cá nhân",
    summary: "Website giới thiệu bản thân với Next.js và TypeScript.",
    description:
      "Xây dựng trang portfolio với App Router, layout tái sử dụng và routing động cho blog. Dự án tập trung vào trải nghiệm responsive và triển khai nhanh trên Vercel.",
    tech: ["Next.JS", "Tailwind CSS", "TypeScript"],
    context: "Bài lab môn Các công nghệ mới trong PTPM",
    role: "Thiết kế giao diện, phát triển frontend, cấu hình routing",
    period: "01/2026 - nay",
    github: "https://github.com/Jiipi/CTK46B_Cong_Nghe_Moi_Lab01",
  },
  {
    id: "task-management-app",
    title: "Ứng dụng Quản lý Công việc",
    summary: "Todo App hỗ trợ lọc và cập nhật trạng thái công việc.",
    description:
      "Ứng dụng cho phép thêm, sửa, xóa, đánh dấu hoàn thành và lọc công việc theo trạng thái. Dữ liệu được lưu local để giữ phiên làm việc.",
    tech: ["React", "TypeScript", "Local Storage"],
    context: "Bài tập thực hành Frontend",
    role: "Xây dựng component, quản lý state và persistence",
    period: "11/2025 - 12/2025",
    github: "https://github.com/Jiipi",
  },
  {
    id: "product-api",
    title: "API Quản lý Sản phẩm",
    summary: "REST API có phân trang, tìm kiếm và kiểm tra dữ liệu đầu vào.",
    description:
      "Thiết kế API theo mô hình controller-service-repository, chuẩn hóa response và xử lý lỗi. Bổ sung endpoint tìm kiếm để tích hợp với dashboard quản trị.",
    tech: ["Node.js", "Express", "PostgreSQL"],
    context: "Đồ án môn Phát triển ứng dụng web",
    role: "Thiết kế schema và phát triển backend API",
    period: "09/2025 - 11/2025",
    github: "https://github.com/Jiipi",
  },
  {
    id: "study-blog-mdx",
    title: "Website Blog học tập",
    summary: "Blog chia sẻ kiến thức với định dạng nội dung linh hoạt.",
    description:
      "Phát triển blog hỗ trợ nội dung markdown/MDX, tổ chức theo chuyên mục và slug động. Dự án hướng tới khả năng viết bài nhanh và tối ưu SEO cơ bản.",
    tech: ["Next.JS", "MDX", "Tailwind CSS"],
    context: "Project cá nhân",
    role: "Xây dựng trang bài viết, cấu trúc dữ liệu và điều hướng",
    period: "12/2025 - 01/2026",
    github: "https://github.com/Jiipi",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
