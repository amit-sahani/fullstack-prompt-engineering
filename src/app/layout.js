import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MuiThemeProvider from "../mui-theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fullstack Learning Intro",
  description:
    "A modern, SEO-ready learning platform for fullstack development using React, Material UI, Tailwind, and JavaScript.",
  keywords: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "NodeJS",
    "ExpressJS",
    "Fullstack",
    "Learning",
    "Education",
    "Web Development",
  ],
  openGraph: {
    title: "Fullstack Learning Intro",
    description:
      "A modern, SEO-ready learning platform for fullstack development using React, Material UI, Tailwind, and JavaScript.",
    url: "https://yourdomain.com/",
    siteName: "Fullstack Learning Intro",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Fullstack Learning Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  );
}
