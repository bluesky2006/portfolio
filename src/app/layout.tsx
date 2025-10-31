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
        <div className="fixed inset-0 -z-5 pointer-events-none bg-gradient-to-r from-brand-white/10 via-brand-white/80 to-brand-white dark:from-brand-black/10 dark:via-brand-black/80 dark:to-brand-black" />
        {children}
      </body>
    </html>
  );
}
