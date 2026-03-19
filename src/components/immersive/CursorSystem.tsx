"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { twMerge } from "tailwind-merge";
import type { CursorMode } from "@/lib/immersive";

type CursorSystemProps = {
  mode: CursorMode;
};

export function CursorSystem({ mode }: CursorSystemProps) {
  const [enabled, setEnabled] = useState(false);
  const [pressed, setPressed] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { damping: 28, stiffness: 320, mass: 0.3 });
  const smoothY = useSpring(y, { damping: 28, stiffness: 320, mass: 0.3 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(media.matches && !reduce.matches);
    update();
    media.addEventListener("change", update);
    reduce.addEventListener("change", update);

    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);

    return () => {
      media.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, [x, y]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] mix-blend-screen"
      style={{ x: smoothX, y: smoothY }}
    >
      {mode === "ring" ? (
        <div
          className={twMerge(
            "-translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-white/5 shadow-[0_0_22px_rgba(255,255,255,0.15)] transition-transform duration-150",
            pressed ? "h-6 w-6" : "h-10 w-10"
          )}
        >
          <div className="absolute inset-2 rounded-full border border-white/15" />
        </div>
      ) : (
        <div
          className={twMerge(
            "relative -translate-x-[6px] -translate-y-[22px] transition-transform duration-150",
            pressed ? "scale-95" : "scale-100"
          )}
        >
          <div className="h-8 w-[2px] rotate-[22deg] rounded-full bg-[linear-gradient(180deg,#f5d084_0%,#e66aa5_58%,#7958ff_100%)] shadow-[0_0_16px_rgba(210,128,255,0.4)]" />
          <div className="absolute bottom-[-3px] left-[-4px] h-3 w-3 rotate-[22deg] rounded-[2px] border border-white/35 bg-[#fff0] backdrop-blur-[2px]" />
        </div>
      )}
    </motion.div>
  );
}
