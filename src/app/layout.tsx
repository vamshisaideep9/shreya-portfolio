import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shreya Sirigireddy | Fashion & Creative Portfolio",
  description: "The portfolio of Shreya Sirigireddy, exploring fashion management, product development, merchandising, and visual storytelling.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
