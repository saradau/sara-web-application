import Navbar from "@/lib/components/Navbar";
import "../styles/global.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Footer from "@/lib/components/Footer";

export const metadata: Metadata = {
  title: "Digital Product Jam Starter Kit",
  description:
    "A starter kit for wiritng code in the Digital Product Jam course.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
