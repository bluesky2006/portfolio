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
    <html lang="en">
      <body className="bg-brand-bg mx-auto min-h-screen max-w-screen-xl">
        {children}
      </body>
    </html>
  );
}
