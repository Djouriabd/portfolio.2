import Reveal from "./Reveal";
import Sparkle from "./Sparkle";
import styles from "./SectionTitle.module.css";

type Props = {
  title: string;
  /** Show the row of seven slowly spinning stars above the title */
  stars?: boolean;
};

export default function SectionTitle({ title, stars = true }: Props) {
  return (
    <Reveal className={styles.wrap}>
      {stars && (
        <div className={styles.stars} aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <Sparkle
              key={i}
              size="clamp(28px, 4.5vw, 64px)"
              color="#d9d5de"
              duration={30}
              // offset each star so the row looks like the design's rotation sequence
              delay={-i * 1.25}
              motion={i % 2 === 0 ? "spin" : "spin-reverse"}
            />
          ))}
        </div>
      )}
      <h2 className={styles.title}>{title}</h2>
    </Reveal>
  );
}
