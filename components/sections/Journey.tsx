import GlowOrbs from "@/components/ui/GlowOrbs";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Sparkle from "@/components/ui/Sparkle";
import Squiggle from "@/components/ui/Squiggle";
import { journey, type TitlePart } from "@/data/journey";
import styles from "./Journey.module.css";

function Title({ parts }: { parts: TitlePart[] }) {
  return (
    <h4 className={styles.entryTitle}>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <span key={i} className={styles.accent}>
            {part.accent}
          </span>
        ),
      )}
    </h4>
  );
}

export default function Journey() {
  return (
    <section id="journey" className={styles.journey}>
      <GlowOrbs
        orbs={[
          { top: "20%", left: "-10%", size: 520, duration: 12, delay: 1 },
          { top: "65%", left: "20%", size: 460, duration: 14, delay: 6 },
          { top: "30%", right: "-5%", size: 400, duration: 11, delay: 3 },
        ]}
      />
      <Squiggle variant="wave" className={styles.squiggle} />
      <Sparkle className={styles.decoBurst} variant="burst" size={80} duration={40} />
      <Sparkle className={styles.decoMid} variant="soft" size={96} duration={30} motion="spin-reverse" />
      <Sparkle className={styles.decoBottom} size={68} duration={26} />

      <div className="container">
        <SectionTitle title="My journey" />

        <ol className={styles.timeline}>
          {journey.map((year) => (
            <li key={year.year} className={styles.year}>
              <Reveal variant="left" className={styles.yearHead}>
                <Sparkle className={styles.yearStar} variant="burst" size={76} duration={32} />
                <h3 className={styles.yearLabel}>{year.year}</h3>
              </Reveal>

              {year.entries.map((entry, i) => (
                <Reveal key={i} variant="left" delay={120 + i * 120} className={styles.entry}>
                  <Title parts={entry.title} />
                  <p className={styles.entryText}>{entry.text}</p>
                </Reveal>
              ))}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
