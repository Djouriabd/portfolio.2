import styles from "./BackToTop.module.css";

/** Round badge with text spinning slowly around an arrow. */
export default function BackToTop() {
  return (
    <a href="#top" className={styles.badge} aria-label="Back to top">
      <svg viewBox="0 0 120 120" className={styles.ring} aria-hidden="true">
        <defs>
          <path id="ring-path" d="M60 60 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0" />
        </defs>
        <text>
          <textPath href="#ring-path" textLength="289">
            BACK TO TOP ✦ BACK TO TOP ✦
          </textPath>
        </text>
      </svg>
      <span className={styles.arrow} aria-hidden="true">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M6 11l6-6 6 6" />
        </svg>
      </span>
    </a>
  );
}
