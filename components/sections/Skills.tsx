import type { CSSProperties } from "react";
import GlowOrbs from "@/components/ui/GlowOrbs";
import Reveal from "@/components/ui/Reveal";
import Sparkle from "@/components/ui/Sparkle";
import Squiggle from "@/components/ui/Squiggle";
import { tools } from "@/data/skills";
import SkillRadar from "./SkillRadar";
import ToolBadge from "./ToolBadge";
import styles from "./Skills.module.css";

/** Angle (deg) of each radar tip, clockwise from the top-right one. */
export const tipAngle = (i: number) => -72 + i * 72;

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className="sr-only">Skills</h2>
      <GlowOrbs
        orbs={[
          { top: "15%", left: "30%", size: 640, duration: 12 },
          { top: "60%", right: "-10%", size: 480, duration: 13, delay: 5 },
        ]}
      />
      <Squiggle variant="wave" className={styles.squiggleLeft} viewBox="0 0 320 920" />
      <Sparkle className={styles.decoStar} size={96} color="#6c3fb3" duration={34} motion="spin-reverse" variant="soft" />

      <Reveal className={`container ${styles.stage}`} variant="none">
        <div className={styles.chart}>
          <SkillRadar levels={tools.map((t) => t.level)} angles={tools.map((_, i) => tipAngle(i))} />

          <ul className={styles.tools}>
            {tools.map((tool, i) => {
              const angle = (tipAngle(i) * Math.PI) / 180;
              const side = Math.cos(angle) < -0.1 ? "left" : "right";
              return (
                <li
                  key={tool.id}
                  className={styles.tool}
                  data-side={side}
                  style={
                    {
                      "--x": `${50 + 56 * Math.cos(angle)}%`,
                      "--y": `${50 + 56 * Math.sin(angle)}%`,
                      "--i": i,
                    } as CSSProperties
                  }
                >
                  <ToolBadge id={tool.id} />
                  <p className={styles.label}>
                    <strong>-{tool.name}:</strong>
                    <span>{tool.use}</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
