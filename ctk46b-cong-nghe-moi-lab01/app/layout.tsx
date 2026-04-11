import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CTK46 - Lab 01",
    template: "%s | CTK46 - Lab 01",
  },
  description: "Bài thực hành 1 - Các công nghệ mới trong PTPM",
  applicationName: "CTK46B Lab 01",
  keywords: ["Next.js", "CTK46B", "Lab 01", "PTPM"],
  authors: [{ name: "Trần Ngọc Hưng" }],
  creator: "Trần Ngọc Hưng",
  openGraph: {
    title: "CTK46 - Lab 01",
    description: "Bài thực hành 1 - Các công nghệ mới trong PTPM",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
