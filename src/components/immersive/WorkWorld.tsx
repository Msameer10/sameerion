"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { contactLinks, projectApps, type ProjectApp } from "@/data/portfolio";
import { workStars } from "@/lib/immersive";
import { WorldSection } from "./WorldSection";

type BatteryState = {
  level: number;
  charging: boolean;
  supported: boolean;
};

declare global {
  interface Navigator {
    getBattery?: () => Promise<{
      level: number;
      charging: boolean;
      addEventListener: (type: string, listener: () => void) => void;
      removeEventListener: (type: string, listener: () => void) => void;
    }>;
  }
}

function getBatteryTone(level: number) {
  if (level >= 70) return "bg-emerald-400";
  if (level >= 35) return "bg-amber-400";
  return "bg-rose-400";
}

function AppIcon({
  project,
  onOpen,
  compact = false,
}: {
  project: ProjectApp;
  onOpen: (project: ProjectApp) => void;
  compact?: boolean;
}) {
  const initials = project.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <button
      type="button"
      aria-label={`Open ${project.name}`}
      onClick={() => onOpen(project)}
      className="group flex flex-col items-center gap-2 rounded-[1.4rem] p-1.5 text-center transition duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
    >
      <span className={compact ? "phone-app-icon" : "tablet-app-icon"}>
        <span className="tablet-app-shine" />
        <span className="text-xs font-semibold text-white/90 md:text-sm">{initials}</span>
      </span>
      <span
        className={`text-white/82 transition duration-300 group-hover:text-white ${
          compact
            ? "max-w-[4.2rem] text-[0.62rem] leading-4"
            : "max-w-[4.7rem] text-[0.66rem] leading-4 md:text-[0.7rem]"
        }`}
      >
        {project.name}
      </span>
    </button>
  );
}

function DeviceDetail({ project }: { project: ProjectApp }) {
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[0.62rem] uppercase tracking-[0.34em] text-[#cabcf5]/72">
            {project.badge} / {project.status}
          </p>
          <h3 className="mt-1.5 text-sm font-semibold text-white md:text-base">{project.name}</h3>
        </div>
        <span className="rounded-full border border-white/10 px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.26em] text-white/55">
          Summary
        </span>
      </div>
      <p className="mt-2 text-xs leading-5 text-white/64 md:text-[0.82rem]">{project.summary}</p>
      {project.bullets.length > 0 ? (
        <ul className="mt-4 space-y-2 text-sm leading-6 text-white/70">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="resume-bullet">
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-5 flex flex-wrap gap-3">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="world-button world-button-primary !h-11 !px-5 !text-sm"
          >
            View Project
          </a>
        ) : null}
      </div>
    </>
  );
}

export function WorkWorld() {
  const [selectedProject, setSelectedProject] = useState<ProjectApp | null>(projectApps[0]);
  const [statusText, setStatusText] = useState("");
  const [battery, setBattery] = useState<BatteryState>({
    level: 82,
    charging: false,
    supported: false,
  });

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat([], {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });

    const updateTime = () => setStatusText(formatter.format(new Date()));
    updateTime();
    const interval = window.setInterval(updateTime, 1000 * 30);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    let batteryManager:
      | Awaited<ReturnType<NonNullable<typeof navigator.getBattery>>>
      | undefined;

    const update = () => {
      if (!batteryManager) return;
      setBattery({
        level: Math.round(batteryManager.level * 100),
        charging: batteryManager.charging,
        supported: true,
      });
    };

    if (!navigator.getBattery) {
      return;
    }

    navigator
      .getBattery()
      .then((manager) => {
        batteryManager = manager;
        update();
        manager.addEventListener("chargingchange", update);
        manager.addEventListener("levelchange", update);
      })
      .catch(() => {
        setBattery((current) => ({ ...current, supported: false }));
      });

    return () => {
      if (!batteryManager) return;
      batteryManager.removeEventListener("chargingchange", update);
      batteryManager.removeEventListener("levelchange", update);
    };
  }, []);

  const dockLinks = useMemo(
    () => [
      { label: "LinkedIn", href: contactLinks.linkedin },
      { label: "GitHub", href: contactLinks.github },
      { label: "Resume", href: "/sameerResume.docx" },
    ],
    []
  );

  const stableProject = selectedProject ?? projectApps[0];

  return (
    <WorldSection
      id="world-work"
      label="Work"
      cursor="ring"
      className="bg-[#060811]"
      background={
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#18244d_0%,#0a1022_46%,#05070d_100%)]">
          {workStars.map((star, index) => (
            <span
              key={`${star.left}-${star.top}-${index}`}
              className="work-star"
              style={{
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animationDelay: star.delay,
                animationDuration: `${Number.parseFloat(star.duration) + 3}s`,
              }}
            />
          ))}
          <div className="absolute inset-x-0 top-[-12%] h-[42%] bg-[radial-gradient(circle,rgba(73,72,197,0.22),transparent_65%)] blur-3xl" />
        </div>
      }
    >
      <div className="mx-auto flex w-full max-w-[94rem] flex-col items-center gap-6 lg:gap-7">
        <div className="max-w-xl text-center">
          <p className="mb-2 text-[0.7rem] uppercase tracking-[0.38em] text-[#c9bbff]/75 md:text-xs">Featured Projects</p>
          <h2 className="font-display text-[clamp(1.35rem,2.4vw,1.95rem)] tracking-[-0.04em] text-white">
            A concise selection of work across analytics, machine learning, and full stack development.
          </h2>
        </div>

        <div className="w-full">
          <div className="mx-auto hidden max-w-[86rem] md:block">
            <div className="tablet-shell tablet-shell-large device-shell-tablet mx-auto w-full max-w-[min(88vw,84rem)] px-5 pb-7 pt-5 lg:px-8 lg:pb-8 lg:pt-6">
              <div className="tablet-status-bar">
                <span>{statusText || "Tue, Mar 19, 7:18 AM"}</span>
                <div className="flex items-center gap-2 text-white/80">
                  <span>{battery.supported ? `${battery.level}%` : "Battery --"}</span>
                  <span className="tablet-battery">
                    <span
                      className={`tablet-battery-fill ${getBatteryTone(battery.level)}`}
                      style={{ width: `${battery.level}%` }}
                    />
                  </span>
                </div>
              </div>

              <div className="tablet-wallpaper">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_24%,rgba(166,112,255,0.2),transparent_28%),radial-gradient(circle_at_76%_22%,rgba(89,165,255,0.18),transparent_26%),linear-gradient(160deg,rgba(10,13,24,0.95),rgba(8,11,18,0.88))]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_18%,transparent_82%,rgba(255,255,255,0.04))]" />
              </div>

              <div className="relative z-10 mt-10 grid grid-cols-3 gap-8 lg:mt-12 lg:gap-10">
                {projectApps.map((project) => (
                  <AppIcon key={project.name} project={project} onOpen={setSelectedProject} />
                ))}
              </div>

              <AnimatePresence mode="wait">
                {selectedProject && (
                  <motion.div
                    key={selectedProject.name}
                    initial={{ opacity: 0, y: 10, scale: 0.985 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.985 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="latest-build-widget latest-build-widget-tablet mt-7"
                  >
                    <DeviceDetail project={selectedProject} />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="tablet-dock mt-7">
                {dockLinks.map((link) =>
                  link.href.startsWith("/") ? (
                    <Link key={link.label} href={link.href} className="tablet-dock-link">
                      {link.label}
                    </Link>
                  ) : (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="tablet-dock-link">
                      {link.label}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[26rem] md:hidden">
            <div className="phone-shell device-shell-phone">
              <div className="phone-notch" />
              <div className="tablet-status-bar phone-status-bar">
                <span>{statusText || "Tue, Mar 19, 7:18 AM"}</span>
                <div className="flex items-center gap-2 text-white/80">
                  <span>{battery.supported ? `${battery.level}%` : "Battery --"}</span>
                </div>
              </div>

              <div className="tablet-wallpaper phone-wallpaper">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(166,112,255,0.22),transparent_28%),radial-gradient(circle_at_76%_18%,rgba(89,165,255,0.18),transparent_24%),linear-gradient(160deg,rgba(10,13,24,0.97),rgba(8,11,18,0.92))]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_18%,transparent_82%,rgba(255,255,255,0.04))]" />
              </div>

              <div className="relative z-10 mt-12 grid grid-cols-3 gap-4 px-1">
                {projectApps.map((project) => (
                  <AppIcon key={project.name} project={project} onOpen={setSelectedProject} compact />
                ))}
              </div>

              <AnimatePresence mode="wait">
                {selectedProject && (
                  <motion.div
                    key={`${selectedProject.name}-mobile`}
                    initial={{ opacity: 0, y: 10, scale: 0.985 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.985 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="latest-build-widget mt-6"
                  >
                    <DeviceDetail project={selectedProject} />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="tablet-dock mt-6">
                {dockLinks.map((link) =>
                  link.href.startsWith("/") ? (
                    <Link key={link.label} href={link.href} className="tablet-dock-link">
                      {link.label}
                    </Link>
                  ) : (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="tablet-dock-link">
                      {link.label}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </WorldSection>
  );
}
