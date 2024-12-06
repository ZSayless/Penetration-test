import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "SecureTest Pro | Enterprise Cybersecurity Solutions",
  description:
    "Leading provider of advanced penetration testing and security assessment services. Protect your enterprise with our comprehensive cybersecurity solutions and expert vulnerability analysis.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
