import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luu Chan Huy - Mobile Developer Portfolio",
  description: "Mobile Developer specializing in iOS, Android, and React Native. Building high-quality, user-centric mobile applications with 5+ years of experience.",
  keywords: ["Mobile Developer", "iOS Developer", "Android Developer", "React Native", "Swift", "Kotlin", "Portfolio"],
  authors: [{ name: "Luu Chan Huy" }],
  openGraph: {
    title: "Luu Chan Huy - Mobile Developer Portfolio",
    description: "Mobile Developer specializing in iOS, Android, and React Native applications",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
