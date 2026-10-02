import type { CSSProperties } from "react";
import styles from "./Sparkle.module.css";

type Variant = "four" | "soft" | "burst";
type Motion = "spin" | "spin-reverse" | "wobble" | "twinkle" | "none";

type Props = {
  variant?: Variant;
  size?: number | string;
  color?: string;
  motion?: Motion;
  /** Seconds for one full cycle — kept high so everything moves in slow motion */
  duration?: number;
  /** Seconds; negative values start the animation part-way through */
  delay?: number;
  className?: string;
  style?: CSSProperties;
};

const FOUR = "M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z";
const SOFT = "M50 0 C53 40 60 47 100 50 C60 53 53 60 50 100 C47 60 40 53 0 50 C40 47 47 40 50 0 Z";

function burstPoints(rays = 12) {
  const pts: string[] = [];
  for (let i = 0; i < rays * 2; i++) {
    const angle = (Math.PI * i) / rays - Math.PI / 2;
    const r = i % 2 === 1 ? 9 : i % 4 === 0 ? 50 : 36;
    pts.push(`${(50 + r * Math.cos(angle)).toFixed(2)},${(50 + r * Math.sin(angle)).toFixed(2)}`);
  }
  return pts.join(" ");
}

const BURST = burstPoints();

export default function Sparkle({
  variant = "four",
  size = 32,
  color = "var(--star)",
  motion = "spin",
  duration = 24,
  delay = 0,
  className = "",
  style,
}: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={`${styles.sparkle} ${motion !== "none" ? styles[motion] : ""} ${className}`}
      style={
        {
          width: size,
          height: size,
          "--dur": `${duration}s`,
          "--delay": `${delay}s`,
          ...style,
        } as CSSProperties
      }
    >
      {variant === "burst" ? <polygon points={BURST} fill={color} /> : <path d={variant === "soft" ? SOFT : FOUR} fill={color} />}
    </svg>
  );
}
