import ContactList from "@/components/ui/ContactList";
import GlowOrbs from "@/components/ui/GlowOrbs";
import Reveal from "@/components/ui/Reveal";
import { MailIcon } from "@/components/ui/icons";
import { contacts, profile } from "@/data/profile";
import ContactForm from "./ContactForm";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <GlowOrbs
        orbs={[
          { top: "20%", left: "-12%", size: 620, duration: 12, delay: 1 },
          { bottom: "0%", right: "10%", size: 460, duration: 13, delay: 6 },
        ]}
      />

      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <Reveal variant="left">
            <span className={styles.badge}>
              <span className={styles.badgeIcon}>
                <MailIcon size={14} />
              </span>
              Start a project
            </span>
          </Reveal>

          <Reveal as="h2" variant="left" delay={100} className={styles.heading}>
            Let&rsquo;s build your digital future
          </Reveal>

          <Reveal as="p" variant="left" delay={200} className={styles.text}>
            Ready to launch your next project? Fill out the form or reach out directly to start a conversation about your
            business needs and how we can help you grow.
          </Reveal>

          <Reveal variant="left" delay={300} className={styles.links}>
            <ContactList links={contacts} />
          </Reveal>
        </div>

        <Reveal variant="right" delay={150}>
          <ContactForm email={profile.email} />
        </Reveal>
      </div>
    </section>
  );
}
