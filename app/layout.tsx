import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Abbas's Portfolio",
  description: "A showcase of skills and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className="relative">
          { children }
      </body>
    </html>
  );
}
