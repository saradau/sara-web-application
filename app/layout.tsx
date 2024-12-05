import "../styles/global.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Footer from "../lib/components/Footer";
import Navbar from "../lib/components/Navbar";

export const metadata: Metadata = {
  title: "Digital Product Jam Starter Kit",
  description:
    "A starter kit for wiritng code in the Digital Product Jam course.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body style={{ height: "100vh" }}>{children}</body>
    </html>
  );
}
