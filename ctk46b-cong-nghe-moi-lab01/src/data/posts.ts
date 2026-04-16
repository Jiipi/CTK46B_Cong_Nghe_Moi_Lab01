export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
}

export const posts: Post[] = [
  {
    slug: "gioithieu-nextjs",
    title: "Giới thiệu Next.JS — Framework React phổ biến nhất",
    excerpt:
      "Tìm hiểu tại sao Next.JS là lựa chọn hàng đầu cho phát triển web hiện đại.",
    content: `Next.JS là một React framework mạnh mẽ được phát triển bởi Vercel.
Nó cung cấp nhiều tính năng quan trọng như Server-Side Rendering (SSR),
Static Site Generation (SSG), và App Router.

Một số ưu điểm nổi bật của Next.JS:
- Routing tự động dựa trên cấu trúc thư mục
- Hỗ trợ Server Components và Client Components
- Tối ưu hóa hình ảnh, font, và scripts tự động
- API Routes tích hợp
- Hỗ trợ TypeScript sẵn có`,
    date: "2025-01-15",
    category: "Công nghệ",
    author: "Trần Ngọc Hưng",
  },
  {
    slug: "hoctailwind-css",
    title: "Tailwind CSS — Cách tiếp cận mới cho CSS",
    excerpt:
      "Khám phá phương pháp utility-first CSS và tại sao nó thay đổi cách viết CSS.",
    content: `Tailwind CSS là một utility-first CSS framework, nghĩa là thay vì viết
CSS tùy chỉnh, bạn sử dụng các class tiện ích có sẵn để xây dựng giao diện.

Ví dụ, thay vì viết:
.card { padding: 16px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }

Bạn viết trực tiếp trong HTML:
<div class="p-4 rounded-lg shadow-md">...</div>

Ưu điểm:
- Không cần đặt tên class
- Không cần chuyển qua lại giữa file HTML và CSS
- File CSS cuối cùng rất nhỏ (chỉ chứa class đã dùng)`,
    date: "2025-01-20",
    category: "Công nghệ",
    author: "Trần Ngọc Hưng",
  },
  {
    slug: "kinh-nghiem-hoc-lap-trinh",
    title: "Chia sẻ kinh nghiệm tự học lập trình hiệu quả",
    excerpt: "Những bài học rút ra sau 3 năm tự học lập trình ở đại học.",
    content: `Sau 3 năm học tập và thực hành lập trình, tôi rút ra một số kinh
nghiệm quan trọng:

1. Thực hành nhiều hơn đọc lý thuyết
Lập trình là kỹ năng thực hành. Đọc sách và xem video chỉ chiếm 30%,
70% còn lại là viết code.

2. Xây dựng dự án thực tế
Không gì tốt hơn việc xây dựng một sản phẩm thực tế để học.
Hãy bắt đầu từ những dự án nhỏ và tăng dần độ phức tạp.

3. Tham gia cộng đồng
Tham gia các cộng đồng lập trình để học hỏi và chia sẻ kinh nghiệm.`,
    date: "2025-02-01",
    category: "Học tập",
    author: "Trần Ngọc Hưng",
  },
  {
    slug: "xay-dung-rest-api-voi-express",
    title: "Xây dựng REST API với Express từ A đến Z",
    excerpt:
      "Những bước cốt lõi để thiết kế API rõ ràng, có validation và dễ mở rộng.",
    content: `Khi xây dựng REST API với Express, điều quan trọng nhất là chuẩn hóa cấu trúc.

Các bước tôi thường áp dụng:
1. Tách route, controller, service thành module riêng.
2. Dùng middleware để validate input ngay từ đầu.
3. Chuẩn hóa mã lỗi và response JSON để frontend xử lý dễ hơn.
4. Bổ sung logging để theo dõi request khi debug.

Sau khi hoàn thiện, API sẽ dễ bảo trì và có thể mở rộng thêm tính năng nhanh hơn.`,
    date: "2025-02-10",
    category: "Công nghệ",
    author: "Trần Ngọc Hưng",
  },
  {
    slug: "toi-uu-hieu-nang-react-app",
    title: "Tối ưu hiệu năng React App trong thực tế",
    excerpt:
      "Một số kỹ thuật giúp giảm render thừa và cải thiện trải nghiệm người dùng.",
    content: `Tối ưu hiệu năng React không chỉ là dùng memo một cách máy móc.

Những điểm mình ưu tiên:
1. Tránh truyền object/function mới liên tục xuống component con.
2. Chia nhỏ component theo responsibility để phạm vi render hẹp hơn.
3. Dùng lazy loading cho phần nội dung chưa cần hiển thị ngay.
4. Đo hiệu năng bằng React DevTools Profiler trước khi tối ưu.

Tối ưu đúng chỗ giúp ứng dụng mượt hơn mà vẫn giữ code dễ đọc.`,
    date: "2025-02-18",
    category: "Học tập",
    author: "Trần Ngọc Hưng",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
