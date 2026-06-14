import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aditya Dhonde — AI Engineer & Machine Learning Developer",
  description:
    "Portfolio of Aditya Dipak Dhonde — AI Engineer, Machine Learning Engineer & Data Scientist building intelligent systems with ML, Generative AI and Data Analytics.",
  keywords: [
    "Aditya Dhonde",
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Generative AI Developer",
    "Portfolio",
  ],
  openGraph: {
    title: "Aditya Dhonde — AI Engineer & Machine Learning Developer",
    description:
      "Building intelligent systems with AI, Machine Learning & Data Science.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body bg-bg text-ink antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
