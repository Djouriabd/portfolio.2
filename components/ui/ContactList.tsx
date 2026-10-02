import type { ContactLink } from "@/data/profile";
import { BehanceIcon, InstagramIcon, MailIcon, PhoneIcon } from "./icons";
import styles from "./ContactList.module.css";

const ICONS = {
  email: MailIcon,
  phone: PhoneIcon,
  instagram: InstagramIcon,
  behance: BehanceIcon,
};

export default function ContactList({ links }: { links: ContactLink[] }) {
  return (
    <ul className={styles.list}>
      {links.map((link) => {
        const Icon = ICONS[link.kind];
        const external = link.href?.startsWith("http");
        const content = (
          <>
            <span className={styles.icon}>
              <Icon size={24} />
            </span>
            <span className={styles.label}>{link.label}</span>
          </>
        );
        return (
          <li key={link.kind}>
            {link.href ? (
              <a
                className={styles.item}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
              >
                {content}
              </a>
            ) : (
              <span className={styles.item}>{content}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
