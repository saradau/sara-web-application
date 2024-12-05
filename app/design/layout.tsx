import { Metadata } from "next";
import React from "react";
import "./styles/design-system.css";

export const metadata: Metadata = {
  title: "Sign-up",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="futura-font" style={{ height: "100%", overflow: "clip" }}>
      {children}
    </div>
  );
}
