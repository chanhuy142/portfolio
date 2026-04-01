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
  title: "Luu Chan Huy - Flutter & Android Developer",
  description: "Flutter & Android Developer with 2+ years of experience building and shipping mobile apps. Strong in Flutter (BLoC, Firebase, GraphQL, WebSocket), Bluetooth/POS integrations, and release pipelines.",
  keywords: ["Flutter Developer", "Android Developer", "Mobile Developer", "Dart", "Kotlin", "BLoC", "Firebase", "Portfolio"],
  authors: [{ name: "Luu Chan Huy" }],
  openGraph: {
    title: "Luu Chan Huy - Flutter & Android Developer",
    description: "Flutter & Android Developer with 2+ years of experience shipping production mobile apps",
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
