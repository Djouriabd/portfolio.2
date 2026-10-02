"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/profile";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${open ? styles.open : ""}`}>
      <nav className={styles.nav} aria-label="Main">
        <a href="#top" className={styles.logo} onClick={() => setOpen(false)}>
          RUBY.AI
        </a>

        <ul id="nav-links" className={styles.links}>
          {navLinks.map((link, i) => (
            <li key={link.href} style={{ animationDelay: `${0.15 + i * 0.08}s` }}>
              <a href={link.href} onClick={() => setOpen(false)}>
                <span className={styles.plus} aria-hidden="true">
                  +
                </span>
                <span className={styles.text}>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={styles.cta}>
          Contact me
        </a>

        <button
          type="button"
          className={styles.burger}
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
