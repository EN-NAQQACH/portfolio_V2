import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohssine En-naqqach — AI Developer",
  description: "Portfolio of Mohssine En-naqqach — AI Developer, Machine Learning Engineer & Backend Developer.",
  keywords: ["AI Developer", "Machine Learning", "Backend Developer", "Portfolio"],
  authors: [{ name: "Mohssine En-naqqach" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="noise antialiased">
        {children}
      </body>
    </html>
  );
}
