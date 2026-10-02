import type { CSSProperties } from "react";
import styles from "./Marquee.module.css";

type Props = {
  text: string;
  /** How many times the word appears in one half of the loop */
  repeat?: number;
  /** Seconds for one full loop — high value = slow, calm motion */
  duration?: number;
  reverse?: boolean;
  /** Slight rotation of the band, in degrees */
  tilt?: number;
  id?: string;
};

/** Purple title band with text sliding in an endless, slow loop. */
export default function Marquee({ text, repeat = 8, duration = 45, reverse = false, tilt = 0, id }: Props) {
  const items = Array.from({ length: repeat });

  const group = () => (
    <ul className={styles.group} aria-hidden="true">
      {items.map((_, i) => (
        <li key={i} className={i % 2 === 0 ? styles.light : styles.dark}>
          {text}
        </li>
      ))}
    </ul>
  );

  return (
    <div
      id={id}
      className={styles.band}
      style={{ "--dur": `${duration}s`, "--tilt": `${tilt}deg`, "--bleed": tilt ? "48px" : "0px" } as CSSProperties}
      role="presentation"
    >
      <div className={`${styles.track} ${reverse ? styles.reverse : ""}`}>
        {group()}
        {group()}
      </div>
    </div>
  );
}
