import styles from "./SkillRadar.module.css";

const C = 250; // center of the 500×500 viewBox
const R = 225; // radius of the outer frame

/** 5-point star: `tips` are the tip radii (0–1), valleys sit between them at `valley` × R. */
function starPoints(tips: number[], valleys: number[], angles: number[]) {
  const pts: string[] = [];
  tips.forEach((tip, i) => {
    const a = (angles[i] * Math.PI) / 180;
    const v = ((angles[i] + 36) * Math.PI) / 180;
    pts.push(`${(C + tip * R * Math.cos(a)).toFixed(1)},${(C + tip * R * Math.sin(a)).toFixed(1)}`);
    pts.push(`${(C + valleys[i] * R * Math.cos(v)).toFixed(1)},${(C + valleys[i] * R * Math.sin(v)).toFixed(1)}`);
  });
  return pts.join(" ");
}

type Props = {
  levels: number[];
  angles: number[];
};

export default function SkillRadar({ levels, angles }: Props) {
  const n = levels.length;
  const frame = (scale: number) => starPoints(Array(n).fill(scale), Array(n).fill(scale * 0.56), angles);
  const data = (scale: number) =>
    starPoints(
      levels.map((l) => l * 0.9 * scale),
      levels.map((l, i) => ((l + levels[(i + 1) % n]) / 2) * 0.42 * scale),
      angles,
    );

  return (
    <svg className={styles.radar} viewBox="0 0 500 500" role="img" aria-label="Star chart of design tool skills">
      <polygon className={styles.frame} points={frame(1)} pathLength={1} />
      <polygon className={styles.frame} points={frame(0.84)} pathLength={1} style={{ animationDelay: "0.25s" }} />

      <g className={styles.data}>
        <polygon className={styles.fill} points={data(1)} />
        {[0.82, 0.66, 0.5, 0.35, 0.2].map((s) => (
          <polygon key={s} className={styles.grid} points={data(s)} />
        ))}
        {/* spokes from the center to each tip */}
        {levels.map((l, i) => {
          const a = (angles[i] * Math.PI) / 180;
          return (
            <line
              key={i}
              className={styles.grid}
              x1={C}
              y1={C}
              x2={C + l * 0.9 * R * Math.cos(a)}
              y2={C + l * 0.9 * R * Math.sin(a)}
            />
          );
        })}
      </g>
    </svg>
  );
}
