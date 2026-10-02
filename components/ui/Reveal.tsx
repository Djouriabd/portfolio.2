"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode, type Ref } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Delay in ms before the element animates in */
  delay?: number;
  variant?: "up" | "left" | "right" | "scale" | "none";
  style?: CSSProperties;
  id?: string;
};

/**
 * Fades/slides its children in the first time they scroll into view.
 * Also adds the global `is-visible` class, which child components use
 * (via `:global(.is-visible)`) to trigger their own entrance animations.
 */
export default function Reveal({ children, as: Tag = "div", className = "", delay = 0, variant = "up", style, id }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      id={id}
      className={`reveal reveal--${variant}${visible ? " is-visible" : ""} ${className}`}
      style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
