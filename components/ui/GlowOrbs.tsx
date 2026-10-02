import type { CSSProperties } from "react";
import styles from "./GlowOrbs.module.css";

export type Orb = {
  /** CSS position values, e.g. "10%" or "-120px" */
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: number;
  /** seconds for one fade-in / fade-out cycle */
  duration?: number;
  delay?: number;
  color?: string;
};

/** Blurred purple circles that slowly fade in and out behind a section. */
export default function GlowOrbs({ orbs }: { orbs: Orb[] }) {
  return (
    <div className={styles.layer} aria-hidden="true">
      {orbs.map((orb, i) => (
        <span
          key={i}
          className={styles.orb}
          style={
            {
              top: orb.top,
              left: orb.left,
              right: orb.right,
              bottom: orb.bottom,
              width: orb.size,
              height: orb.size,
              "--dur": `${orb.duration ?? 12}s`,
              "--delay": `${orb.delay ?? 0}s`,
              "--orb": orb.color ?? "rgba(138, 63, 214, 0.55)",
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
