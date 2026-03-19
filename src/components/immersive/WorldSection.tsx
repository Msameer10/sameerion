"use client";

import type { PropsWithChildren, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import type { CursorMode } from "@/lib/immersive";

type WorldSectionProps = PropsWithChildren<{
  id: string;
  label: string;
  cursor: CursorMode;
  className?: string;
  background?: ReactNode;
  foregroundClassName?: string;
}>;

export function WorldSection({
  id,
  label,
  cursor,
  className,
  background,
  foregroundClassName,
  children,
}: WorldSectionProps) {
  return (
    <section
      id={id}
      data-world={label}
      data-cursor-mode={cursor}
      className={twMerge(
        "world-section relative min-h-svh snap-start overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0">{background}</div>
      <div className="pointer-events-none absolute left-4 top-4 z-20 md:left-8 md:top-8">
        <div className="world-label">{label}</div>
      </div>
      <div
        className={twMerge(
          "relative z-10 flex min-h-svh items-center justify-center px-5 py-20 md:px-10",
          foregroundClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
