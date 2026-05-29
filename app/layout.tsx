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
  title: "桌面单词 | 桌面悬浮单词学习软件",
  description:
    "桌面单词是一款桌面学习单词软件，支持轻巧悬浮、英文中文自动滚动显示、中英文发音、多主题和悬浮卡片配置。",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="桌面单词是一款桌面学习单词软件，支持轻巧悬浮、英文中文自动滚动显示、中英文发音、多主题和悬浮卡片配置。" />
        <meta name="keywords" content="桌面单词,桌面学习单词,桌面悬浮单词学习软件,摸鱼学习单词,摸鱼学习,摸鱼单词" />
        <meta name="author" content="桌面单词" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
