import ContactList from "@/components/ui/ContactList";
import Marquee from "@/components/ui/Marquee";
import Sparkle from "@/components/ui/Sparkle";
import { contacts, navLinks, profile } from "@/data/profile";
import BackToTop from "./BackToTop";
import FooterWordmark from "./FooterWordmark";
import LocalClock from "./LocalClock";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <p className={styles.logo}>{profile.brand}</p>
          <p className={styles.tagline}>
            Designing ideas into beautiful things,
            <br />
            one pixel at a time.
          </p>
          <LocalClock timeZone={profile.timeZone} place={profile.location} />
        </div>

        <nav className={styles.col} aria-label="Footer">
          <p className={styles.colTitle}>Explore</p>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  <Sparkle variant="soft" size={12} color="var(--purple)" motion="none" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.col}>
          <p className={styles.colTitle}>Say hi</p>
          <ContactList links={contacts} />
        </div>

        <BackToTop />
      </div>

      <div className={styles.ticker}>
        <Marquee text="Available for freelance ✦ Let's create something magical" repeat={6} duration={70} reverse />
      </div>

      <FooterWordmark text={profile.brand} />

      <div className={`container ${styles.bottom}`}>
        <span>
          © {year} {profile.name} — all rights reserved
        </span>
        <span>Designed &amp; built with ✦ and lots of purple</span>
      </div>
    </footer>
  );
}
