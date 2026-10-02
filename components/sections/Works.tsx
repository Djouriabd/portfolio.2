import GlowOrbs from "@/components/ui/GlowOrbs";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Squiggle from "@/components/ui/Squiggle";
import { works } from "@/data/works";
import WorksCarousel from "./WorksCarousel";
import styles from "./Works.module.css";

export default function Works() {
  return (
    <section id="works" className={styles.works}>
      <GlowOrbs
        orbs={[
          { top: "30%", left: "20%", size: 600, duration: 12, delay: 2 },
          { bottom: "-5%", left: "-10%", size: 500, duration: 14, delay: 7 },
          { bottom: "0%", right: "-10%", size: 480, duration: 11, delay: 4 },
        ]}
      />
      <Squiggle variant="arc" className={styles.arc} />

      <div className="container">
        <SectionTitle title="My works" />
        <Reveal delay={200}>
          <WorksCarousel works={works} />
        </Reveal>
      </div>
    </section>
  );
}
