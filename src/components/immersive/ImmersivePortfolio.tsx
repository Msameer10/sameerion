"use client";

import { useEffect, useRef, useState } from "react";
import { CursorSystem } from "./CursorSystem";
import { NavDots } from "./NavDots";
import { OriginWorld } from "./OriginWorld";
import { ResumeWorld } from "./ResumeWorld";
import { WorkWorld } from "./WorkWorld";
import { ConnectWorld } from "./ConnectWorld";
import { worldOrder, type CursorMode } from "@/lib/immersive";

export function ImmersivePortfolio() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeWorld, setActiveWorld] = useState(worldOrder[0].id);
  const [cursorMode, setCursorMode] = useState<CursorMode>("ring");

  useEffect(() => {
    const root = containerRef.current;
    if (!root) {
      return;
    }

    const sections = Array.from(root.querySelectorAll<HTMLElement>(".world-section"));
    let frame = 0;

    const updateActiveSection = () => {
      const anchor = root.scrollTop + root.clientHeight * 0.35;
      let nextSection = sections[0];

      for (const section of sections) {
        if (section.offsetTop <= anchor) {
          nextSection = section;
          continue;
        }
        break;
      }

      setActiveWorld(nextSection.id);
      setCursorMode((nextSection.dataset.cursorMode as CursorMode) || "ring");
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    requestUpdate();
    root.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      root.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const scrollToWorld = (id: string) => {
    const section = containerRef.current?.querySelector<HTMLElement>(`#${id}`);
    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative bg-[#05070c] text-white">
      <CursorSystem mode={cursorMode} />
      <NavDots activeId={activeWorld} onNavigate={scrollToWorld} />
      <div ref={containerRef} className="h-svh snap-y snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth">
        <OriginWorld
          introDone
          onViewWork={() => scrollToWorld("world-work")}
          onContact={() => scrollToWorld("world-connect")}
        />
        <ResumeWorld />
        <WorkWorld />
        <ConnectWorld />
      </div>
    </div>
  );
}
