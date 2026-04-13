"use client";

import React from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Root } from "./Root";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Root>{children}</Root>
    </ThemeProvider>
  );
}

