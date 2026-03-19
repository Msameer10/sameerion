export type CursorMode = "ring" | "stylus";

type GeneratedPoint = {
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
};

function createRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

function makePoints(seed: number, count: number, minSize: number, maxSize: number): GeneratedPoint[] {
  const random = createRandom(seed);
  return Array.from({ length: count }, () => ({
    left: `${(random() * 100).toFixed(2)}%`,
    top: `${(random() * 100).toFixed(2)}%`,
    size: Number((minSize + random() * (maxSize - minSize)).toFixed(2)),
    delay: `${(random() * 8).toFixed(2)}s`,
    duration: `${(4 + random() * 10).toFixed(2)}s`,
    opacity: Number((0.18 + random() * 0.82).toFixed(2)),
  }));
}

export const originStars = makePoints(17, 200, 1, 3.4);
export const workStars = makePoints(33, 90, 1, 2.4);
export const connectStars = makePoints(51, 140, 1, 2.8);
export const originParticles = makePoints(73, 28, 2, 5);
export const connectShootingStars = makePoints(117, 4, 120, 220);
export const originDecorativeStars = [
  { left: "18%", top: "22%", size: 26, delay: "0s", duration: "11s" },
  { left: "63%", top: "18%", size: 32, delay: "1.5s", duration: "12s" },
  { left: "74%", top: "52%", size: 40, delay: "0.8s", duration: "13s" },
  { left: "28%", top: "68%", size: 30, delay: "2.1s", duration: "10s" },
  { left: "53%", top: "9%", size: 22, delay: "1.2s", duration: "12.5s" },
  { left: "65%", top: "80%", size: 28, delay: "0.3s", duration: "14s" },
];

export const worldOrder = [
  { id: "world-origin", label: "Origin", cursor: "ring" as CursorMode },
  { id: "world-resume", label: "Experience", cursor: "ring" as CursorMode },
  { id: "world-work", label: "Work", cursor: "ring" as CursorMode },
  { id: "world-connect", label: "Connect", cursor: "stylus" as CursorMode },
];
