import type { CSSProperties } from "react";
import Reveal from "@/components/ui/Reveal";
import Sparkle from "@/components/ui/Sparkle";
import Squiggle from "@/components/ui/Squiggle";
import { softSkills } from "@/data/skills";
import styles from "./SoftSkills.module.css";

export default function SoftSkills() {
  return (
    <section className={styles.soft} aria-labelledby="soft-skills-title">
      <Squiggle variant="wave" className={styles.squiggle} />
      <Sparkle className={styles.burst} variant="burst" size={84} duration={38} />

      <div className={`container ${styles.layout}`}>
        <Reveal variant="left" className={styles.pillWrap}>
          <span className={styles.dots} aria-hidden="true" />
          <h2 id="soft-skills-title" className={styles.pill}>
            Soft skills:
          </h2>
        </Reveal>

        <ul className={styles.list}>
          {softSkills.map((skill, i) => (
            <Reveal
              as="li"
              key={skill}
              variant="right"
              delay={i * 140}
              className={styles.item}
              style={{ "--step": i } as CSSProperties}
            >
              <span>-{skill}</span>
              <Sparkle
                variant="soft"
                size="0.85em"
                color={i % 2 === 0 ? "var(--purple)" : "#fff"}
                duration={18 + i * 3}
                motion={i % 2 === 0 ? "spin" : "spin-reverse"}
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
