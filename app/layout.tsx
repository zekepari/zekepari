import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zekepari.dev"),
  title: "Ezekiel (Zeke) Pari | MESR Co-founder & Product Builder",
  description:
    "Ezekiel (Zeke) Pari is a Brisbane-based Computer Science student, product builder, and co-founder of MESR.",
  applicationName: "Ezekiel Pari",
  authors: [{ name: "Ezekiel Pari", url: "https://zekepari.dev/" }],
  creator: "Ezekiel Pari",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: "https://zekepari.dev/",
    siteName: "Ezekiel Pari",
    title: "Ezekiel (Zeke) Pari | MESR Co-founder & Product Builder",
    description:
      "Brisbane-based Computer Science student, product builder, and co-founder of MESR.",
    firstName: "Ezekiel",
    lastName: "Pari",
    username: "zekepari",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ezekiel (Zeke) Pari — MESR co-founder and product builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezekiel (Zeke) Pari | MESR Co-founder & Product Builder",
    description:
      "Brisbane-based Computer Science student, product builder, and co-founder of MESR.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen text-neutral-800 tracking-wide py-4 max-w-(--breakpoint-md) container`}
      >
        {children}
      </body>
    </html>
  );
}
