import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Simon Busby | Portfolio",
  description: "Built with Next.js",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative mx-auto min-h-screen max-w-screen-xl bg-transparent">
        {/* overlay gradient */}
        <div className="fixed inset-0 bg-gradient-to-r from-[#fefdfc]/10 via-[#fefdfc]/80 to-[#fefdfc] -z-5 pointer-events-none" />

        {children}
      </body>
    </html>
  );
}
