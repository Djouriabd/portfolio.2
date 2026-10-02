import { FigmaLogo, IbisPaintLogo } from "@/components/ui/icons";
import type { ToolId } from "@/data/skills";
import styles from "./ToolBadge.module.css";

/** App-icon style badge for each design tool. */
export default function ToolBadge({ id }: { id: ToolId }) {
  switch (id) {
    case "figma":
      return (
        <span className={`${styles.badge} ${styles.light}`}>
          <FigmaLogo size={46} />
        </span>
      );
    case "ibispaint":
      return (
        <span className={`${styles.badge} ${styles.light}`}>
          <IbisPaintLogo size={64} />
        </span>
      );
    case "canva":
      return <span className={`${styles.badge} ${styles.canva}`}>Canva</span>;
    case "photoshop":
      return <span className={`${styles.badge} ${styles.adobe}`}>Ps</span>;
    case "illustrator":
      return <span className={`${styles.badge} ${styles.adobe}`}>Ai</span>;
  }
}
