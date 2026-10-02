"use client";

import { useEffect, useState } from "react";
import styles from "./LocalClock.module.css";

/** Shows the designer's current local time — a small "I'm a real person" touch. */
export default function LocalClock({ timeZone, place }: { timeZone: string; place: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone });
    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return (
    <p className={styles.clock}>
      <span className={styles.dot} aria-hidden="true" />
      {place} — <time>{time ?? "--:--"}</time> local time
    </p>
  );
}
