import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Loglib from "@loglib/tracker/react";

export const metadata: Metadata = {
  title: "Built | Projects for developers",
  description: "Where you find all the best projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <Loglib
          config={{
            id: "built",
          }}
        />
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
