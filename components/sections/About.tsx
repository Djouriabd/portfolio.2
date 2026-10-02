import ContactList from "@/components/ui/ContactList";
import GlowOrbs from "@/components/ui/GlowOrbs";
import Reveal from "@/components/ui/Reveal";
import { contacts, profile } from "@/data/profile";
import PhotoFrame from "./PhotoFrame";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <GlowOrbs
        orbs={[
          { top: "10%", left: "45%", size: 620, duration: 13, delay: 2 },
          { bottom: "-10%", left: "-8%", size: 420, duration: 10, delay: 5 },
        ]}
      />

      <div className={`container ${styles.grid}`}>
        <Reveal variant="scale">
          <PhotoFrame src={profile.photo} alt={`Portrait of ${profile.name}`} />
        </Reveal>

        <div className={styles.copy}>
          <Reveal variant="right">
            <h2 className={styles.heyo}>HEYO!</h2>
            <div className={styles.heyoLine}>
              <span className={styles.line} />
              <span className={styles.heyoSmall} aria-hidden="true">
                HEYO!
              </span>
            </div>
          </Reveal>

          {profile.intro.map((paragraph, i) => (
            <Reveal key={i} as="p" className={styles.text} delay={150 + i * 120} variant="right">
              {paragraph}
            </Reveal>
          ))}

          <Reveal delay={350} variant="right" className={styles.contact}>
            <h3 className={styles.contactTitle}>Contact me</h3>
            <ContactList links={contacts} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
