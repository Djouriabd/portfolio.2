import Image from "next/image";
import Sparkle from "@/components/ui/Sparkle";
import { CameraIcon } from "@/components/ui/icons";
import styles from "./PhotoFrame.module.css";

/** Scalloped ("wavy circle") outline, in 0–1 units for clipPathUnits="objectBoundingBox". */
function scallopPath(bumps = 13, amplitude = 0.022, radius = 0.475, steps = 360) {
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const r = radius + amplitude * Math.cos(bumps * t);
    d += `${i === 0 ? "M" : "L"}${(0.5 + r * Math.cos(t)).toFixed(4)} ${(0.5 + r * Math.sin(t)).toFixed(4)} `;
  }
  return `${d}Z`;
}

const SCALLOP = scallopPath();

type Props = {
  /** Path to the photo inside /public, e.g. "/me.jpg". null shows a placeholder. */
  src: string | null;
  alt: string;
};

export default function PhotoFrame({ src, alt }: Props) {
  return (
    <div className={styles.frame}>
      <svg width="0" height="0" className={styles.defs} aria-hidden="true">
        <clipPath id="scallop" clipPathUnits="objectBoundingBox">
          <path d={SCALLOP} />
        </clipPath>
      </svg>

      <span className={styles.dots} aria-hidden="true" />
      <Sparkle className={styles.sparkleTop} size="11%" color="#8a4fd6" motion="twinkle" duration={6} variant="soft" />

      {/* the wavy edge turns slowly; the photo counter-rotates so it stays upright */}
      <div className={styles.shape}>
        <div className={styles.photo}>
          {src ? (
            <Image src={src} alt={alt} fill sizes="(max-width: 860px) 80vw, 460px" priority />
          ) : (
            <div className={styles.placeholder}>
              <CameraIcon size={42} />
              <span>Your photo here</span>
              <small>set profile.photo in data/profile.ts</small>
            </div>
          )}
        </div>
      </div>

      <Sparkle className={styles.sparkleBottom} variant="burst" size="24%" duration={36} motion="spin-reverse" />
    </div>
  );
}
