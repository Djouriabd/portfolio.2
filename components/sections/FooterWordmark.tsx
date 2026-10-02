"use client";

import { useRef, type CSSProperties, type PointerEvent } from "react";
import Reveal from "@/components/ui/Reveal";
import styles from "./FooterWordmark.module.css";

/**
 * Giant brand name fading up from the bottom of the page.
 * A soft purple spotlight follows the cursor and lights the letters up.
 */
export default function FooterWordmark({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const letters = text.split("").map((ch, i) => (
    <span key={i} className={styles.letter} style={{ "--i": i } as CSSProperties}>
      {ch}
    </span>
  ));

  return (
    <Reveal variant="none" className={styles.wrap}>
      <div ref={ref} className={styles.stage} onPointerMove={onMove} aria-hidden="true">
        <p className={styles.base}>{letters}</p>
        <p className={styles.glow}>{letters}</p>
      </div>
    </Reveal>
  );
}
