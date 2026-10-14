import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luka Viljušić | Software Developer",
  description: "Software developer specializing in .NET, ASP.NET Core, React and TypeScript. Explore projects, experience and skills.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth scroll-pt-16 antialiased lg:scroll-pt-0 motion-reduce:scroll-auto`}>
      <body className="min-h-svh overflow-x-clip bg-[#101513] font-sans text-[#ECF0E9] selection:bg-[#B6CAA7] selection:text-[#162019]">{children}</body>
    </html>
  );
}
