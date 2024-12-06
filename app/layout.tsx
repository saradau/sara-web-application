import "../styles/global.css";

import type { ReactNode } from "react";

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
