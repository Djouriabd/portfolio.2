import type { CSSProperties } from "react";
import GlowOrbs from "@/components/ui/GlowOrbs";
import Sparkle from "@/components/ui/Sparkle";
import Squiggle from "@/components/ui/Squiggle";
import { profile } from "@/data/profile";
import styles from "./Hero.module.css";

const LETTERS = "PORTFOLIO".split("");

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <GlowOrbs
        orbs={[
          { top: "45%", right: "8%", size: 520, duration: 11 },
          { top: "-10%", right: "-6%", size: 560, duration: 14, delay: 4 },
          { top: "35%", left: "-12%", size: 480, duration: 13, delay: 7 },
        ]}
      />
      <Squiggle variant="loop" className={styles.squiggle} />

      <div className={styles.inner}>
        <h1 className={styles.title} aria-label="Portfolio">
          {LETTERS.map((letter, i) => (
            <span
              key={i}
              className={styles.letter}
              style={{ "--i": i } as CSSProperties}
              aria-hidden="true"
            >
              {letter}
              {i === 0 && (
                <span className={styles.burst}>
                  <Sparkle variant="burst" size="100%" duration={40} />
                </span>
              )}
              {i === 5 && (
                <span className={styles.bigStar}>
                  <Sparkle size="100%" motion="wobble" duration={9} color="#7a4bc0" />
                </span>
              )}
            </span>
          ))}
        </h1>

        <p className={styles.by}>
          <span className={styles.rule} aria-hidden="true" />
          by -{profile.name}
          <span className={styles.rule} aria-hidden="true" />
        </p>
      </div>
    </section>
  );
}
