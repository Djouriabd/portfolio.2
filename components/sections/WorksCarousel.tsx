"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { ArrowIcon } from "@/components/ui/icons";
import type { Work } from "@/data/works";
import WorkCard from "./WorkCard";
import styles from "./WorksCarousel.module.css";

export default function WorksCarousel({ works }: { works: Work[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const [active, setActive] = useState(0);
  // number of distinct scroll positions (e.g. 5 works with 3 visible = 3 positions)
  const [positions, setPositions] = useState(works.length);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  /** distance between the left edges of two neighbouring cards */
  const step = useCallback(() => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>("li");
    if (!track || !card) return 1;
    return card.offsetWidth + (parseFloat(getComputedStyle(track).columnGap) || 0);
  }, []);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const last = Math.round(max / step());
    setPositions(last + 1);
    setAtStart(track.scrollLeft <= 8);
    setAtEnd(track.scrollLeft >= max - 8);
    setActive(Math.min(last, Math.round(track.scrollLeft / step())));
  }, [step]);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(positions - 1, index));
    trackRef.current?.scrollTo({ left: clamped * step(), behavior: "smooth" });
  };

  /* --- click-and-drag scrolling with a mouse (touch already scrolls natively) --- */
  const onPointerDown = (e: PointerEvent<HTMLUListElement>) => {
    if (e.pointerType !== "mouse" || !trackRef.current) return;
    drag.current = { active: true, startX: e.clientX, startScroll: trackRef.current.scrollLeft, moved: false };
  };

  const onPointerMove = (e: PointerEvent<HTMLUListElement>) => {
    const track = trackRef.current;
    if (!drag.current.active || !track) return;
    const dx = e.clientX - drag.current.startX;
    if (!drag.current.moved && Math.abs(dx) > 6) {
      drag.current.moved = true;
      track.setPointerCapture(e.pointerId);
      track.classList.add(styles.dragging);
    }
    if (drag.current.moved) track.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = () => {
    const track = trackRef.current;
    if (!drag.current.active || !track) return;
    drag.current.active = false;
    if (drag.current.moved) {
      track.classList.remove(styles.dragging);
      goTo(Math.round(track.scrollLeft / step()));
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(active - 1);
    }
  };

  return (
    <div className={styles.carousel}>
      <ul
        ref={trackRef}
        className={styles.track}
        onScroll={update}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        // swallow the click that ends a drag so it doesn't open a project
        onClickCapture={(e) => {
          if (drag.current.moved) {
            e.preventDefault();
            e.stopPropagation();
            drag.current.moved = false;
          }
        }}
        onKeyDown={onKeyDown}
        tabIndex={0}
        aria-label="My works — use the arrow keys to browse"
      >
        {works.map((work, i) => (
          <li key={`${work.title}-${i}`} className={styles.slide}>
            <WorkCard work={work} index={i} />
          </li>
        ))}
      </ul>

      <div className={styles.controls}>
        <button type="button" className={styles.arrow} onClick={() => goTo(active - 1)} disabled={atStart} aria-label="Previous work">
          <ArrowIcon size={20} style={{ transform: "scaleX(-1)" }} />
        </button>

        <div className={styles.dots} role="tablist" aria-label="Choose a work">
          {works.slice(0, positions).map((work, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show ${work.title}`}
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <button type="button" className={styles.arrow} onClick={() => goTo(active + 1)} disabled={atEnd} aria-label="Next work">
          <ArrowIcon size={20} />
        </button>
      </div>
    </div>
  );
}
