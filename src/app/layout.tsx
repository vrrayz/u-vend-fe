import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uvend",
  description: "Uvend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/next.svg" sizes="any" />
      <body>
        <GoogleOAuthProvider clientId={`${process.env.GOOGLE_CLIENT_ID}`}>
          {/* <Providers access_token={access_token}>{children}</Providers> */}
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
