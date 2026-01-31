import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JOTIK - TikTok Campaign Tracker",
  description: "Track spend, conversions, CPA, and pause TikTok campaigns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
