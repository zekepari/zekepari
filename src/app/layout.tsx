import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "./_components/Nav";
import { twMerge } from "tailwind-merge";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zeke Pari",
  description: "Zeke's Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "text-neutral-800 absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]")}>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
