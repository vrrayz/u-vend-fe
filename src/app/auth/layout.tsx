import type { Metadata } from "next";
import "../globals.css";
import { Background } from "@/components/Auth/Background";

export const metadata: Metadata = {
  title: "Uvend | Member Area",
  description: "Uvend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="lg:flex">
      <Background />
      {children}
    </div>
  );
}
