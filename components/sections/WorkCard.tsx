import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import type { Work } from "@/data/works";
import styles from "./WorkCard.module.css";

/**
 * A project shaped like a folder. On hover the front face slides down,
 * revealing the project's cover image behind it.
 */
export default function WorkCard({ work, index }: { work: Work; index: number }) {
  const content = (
    <>
      <div className={styles.cover}>
        {work.cover ? (
          <Image src={work.cover} alt="" fill sizes="(max-width: 600px) 80vw, (max-width: 960px) 45vw, 400px" draggable={false} />
        ) : (
          <div className={styles.coverPlaceholder}>
            <span>{work.title}</span>
            <small>add a cover in data/works.ts</small>
          </div>
        )}
      </div>

      <div className={styles.front}>
        <div className={styles.meta}>
          <span className={styles.category}>{work.category}</span>
          <h3 className={styles.title}>{work.title}</h3>
        </div>
        <span className={styles.number} aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        {work.href && (
          <span className={styles.open} aria-hidden="true">
            <ArrowUpRightIcon size={18} />
          </span>
        )}
      </div>
    </>
  );

  const style = { "--accent": work.accent ?? "#06004a" } as CSSProperties;

  return work.href ? (
    <a className={styles.card} href={work.href} target="_blank" rel="noreferrer" style={style} draggable={false}>
      {content}
    </a>
  ) : (
    <article className={styles.card} style={style} tabIndex={0}>
      {content}
    </article>
  );
}
