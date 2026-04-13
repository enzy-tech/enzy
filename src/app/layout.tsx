import React from "react";
import "../styles/index.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Enzy.co 2.0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

