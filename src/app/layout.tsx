import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "./_components/Nav";
import { twMerge } from "tailwind-merge";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "zekepari.dev",
  description: "Zeke's Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "text-neutral-800")}>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
