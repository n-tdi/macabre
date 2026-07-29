"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./page.module.css";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let frameId: number | undefined;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const isNearTop = currentScrollY < 24;
      const isScrollingUp = currentScrollY < lastScrollY.current;

      setIsVisible(isNearTop || isScrollingUp);
      lastScrollY.current = currentScrollY;
      frameId = undefined;
    };

    const handleScroll = () => {
      if (frameId === undefined) {
        frameId = window.requestAnimationFrame(updateHeader);
      }
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId !== undefined) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <header className={`${styles.header} ${isVisible ? "" : styles.headerHidden}`}>
      <div className={styles.headerInner}>
        <a className={styles.brand} href="#top" aria-label="Macabre and Cheese, home">
          <span className={styles.brandName}>
            Macabre <i>&amp;</i> Cheese
          </span>
        </a>

        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#creations">Creations</a>
          <a className={styles.navContact} href="#contact">
            Summon us
          </a>
        </nav>
      </div>
    </header>
  );
}
