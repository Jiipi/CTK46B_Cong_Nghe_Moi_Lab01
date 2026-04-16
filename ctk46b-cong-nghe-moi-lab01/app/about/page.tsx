export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Giới thiệu</h1>

      <div className="space-y-5 text-gray-700">
        <p>
          Xin chào! Tôi là <strong>Trần Ngọc Hưng</strong> (MSSV:
          <strong> 2212377</strong>), sinh viên năm 4 ngành Công nghệ Thông tin
          tại Đại học Đà Lạt, lớp CTK46B.
        </p>
        <p>
          Tôi tập trung vào phát triển ứng dụng web với React/Next.js, ưu tiên
          code sạch, giao diện rõ ràng và tối ưu trải nghiệm người dùng.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Kỹ năng chính</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>JavaScript / TypeScript</li>
          <li>React & Next.JS</li>
          <li>Tailwind CSS</li>
          <li>Git, GitHub và Git workflow</li>
          <li>SQL & PostgreSQL</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Học vấn</h2>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="font-medium">Đại học Đà Lạt</p>
          <p className="text-gray-500">
            Cử nhân Công nghệ Thông tin (2021 — 2025)
          </p>
        </div>
      </div>
    </div>
  );
}
