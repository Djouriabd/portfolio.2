import type { CSSProperties } from "react";
import styles from "./Squiggle.module.css";

const PATHS = {
  // loopy line in the hero's top-left corner
  loop: "M10 300 C 60 260, 40 200, 70 160 S 150 140, 160 110 S 90 60, 120 30 S 200 10, 250 -10 M90 190 C 60 200, 60 160, 80 160 S 100 185, 90 190",
  // long S-curve used beside the journey / skills
  wave: "M300 10 C 160 60, 230 300, 280 420 S 120 520, 60 640 S 120 820, 20 900",
  // gentle arc
  arc: "M0 40 C 120 160, 340 160, 500 0",
};

type Props = {
  variant: keyof typeof PATHS;
  className?: string;
  style?: CSSProperties;
  viewBox?: string;
};

const VIEWBOX: Record<keyof typeof PATHS, string> = {
  loop: "0 -20 260 330",
  wave: "0 0 320 920",
  arc: "0 -10 500 170",
};

/** Thin decorative purple line that draws itself in, then floats gently. */
export default function Squiggle({ variant, className = "", style, viewBox }: Props) {
  return (
    <svg
      className={`${styles.squiggle} ${className}`}
      viewBox={viewBox ?? VIEWBOX[variant]}
      fill="none"
      aria-hidden="true"
      style={style}
      preserveAspectRatio="none"
    >
      <path d={PATHS[variant]} pathLength={1} />
    </svg>
  );
}
