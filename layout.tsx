import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Right Beside",
  description: "Essential aid kits delivered with dignity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
