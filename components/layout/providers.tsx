"use client";
import { ReducedMotionProvider } from "@/lib/motion";
import type { ReactNode } from "react";
export function Providers({ children }: { children: ReactNode }): ReactNode {
  return <ReducedMotionProvider>{children}</ReducedMotionProvider>;
}
