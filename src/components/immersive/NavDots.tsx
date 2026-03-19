"use client";

import { worldOrder } from "@/lib/immersive";
import { twMerge } from "tailwind-merge";

type NavDotsProps = {
  activeId: string;
  onNavigate: (id: string) => void;
  hidden?: boolean;
};

export function NavDots({ activeId, onNavigate, hidden }: NavDotsProps) {
  return (
    <nav
      aria-label="World navigation"
      className={twMerge(
        "fixed z-40 transition-opacity duration-500",
        hidden ? "pointer-events-none opacity-0" : "opacity-100",
        "bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/30 px-3 py-2 backdrop-blur md:bottom-auto md:left-auto md:right-6 md:top-1/2 md:-translate-x-0 md:-translate-y-1/2 md:rounded-[2rem] md:px-2 md:py-3"
      )}
    >
      <ul className="flex items-center gap-3 md:flex-col">
        {worldOrder.map((world) => {
          const isActive = world.id === activeId;
          return (
            <li key={world.id}>
              <button
                type="button"
                aria-label={`Jump to ${world.label}`}
                aria-current={isActive ? "true" : "false"}
                onClick={() => onNavigate(world.id)}
                className={twMerge(
                  "group flex h-4 w-4 items-center justify-center rounded-full border border-white/15 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
                  isActive ? "border-white/70 bg-white/10" : "bg-white/5 hover:bg-white/10"
                )}
              >
                <span
                  className={twMerge(
                    "block h-1.5 w-1.5 rounded-full bg-white/55 transition duration-300",
                    isActive ? "scale-125 bg-white shadow-[0_0_16px_rgba(255,255,255,0.9)]" : "group-hover:bg-white/80"
                  )}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
