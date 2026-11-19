"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./ScrollReveal.module.css";

export type RevealDelayStep = 0 | 1 | 2 | 3 | 4 | 5;

const DELAY_CLASS_MAP: Record<RevealDelayStep, string> = {
  0: styles.delay0,
  1: styles.delay1,
  2: styles.delay2,
  3: styles.delay3,
  4: styles.delay4,
  5: styles.delay5,
};

interface ScrollRevealProps {
  children: ReactNode;
  delayStep?: RevealDelayStep;
  stretch?: boolean;
  className?: string;
}

/**
 * Progressive-enhancement scroll reveal using native IntersectionObserver with zero external dependencies.
 * Content starts visible on SSR and reliably reveals whenever an element enters or passes the viewport.
 */
export function ScrollReveal({
  children,
  delayStep = 0,
  stretch = false,
  className,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      prefersReducedMotion ||
      typeof IntersectionObserver === "undefined"
    ) {
      element.dataset.reveal = "visible";
      return;
    }

    const checkAndReveal = () => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.98) {
        element.dataset.reveal = "visible";
        return true;
      }
      return false;
    };

      if (checkAndReveal()) {
        return;
      }

      element.dataset.reveal = "hidden";

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
              if (
                entry.isIntersecting ||
                entry.boundingClientRect.top <= window.innerHeight * 0.98
              ) {
                element.dataset.reveal = "visible";
                observer.disconnect();
                break;
              }
            }
          },
          {
                threshold: 0.01,
                  rootMargin: "0px 0px -12px 0px",
      }
    );

      const handleSync = () => {
        if (checkAndReveal()) {
          observer.disconnect();
        }
      };

      observer.observe(element);
      window.addEventListener("gouni:reveal-sync", handleSync);
      window.addEventListener("hashchange", handleSync);

      return () => {
        observer.disconnect();
        window.removeEventListener("gouni:reveal-sync", handleSync);
        window.removeEventListener("hashchange", handleSync);
      };
    }, []);

  const classes = [
    styles.revealItem,
    DELAY_CLASS_MAP[delayStep],
    stretch ? styles.stretch : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={containerRef} className={classes}>
      {children}
    </div>
  );
}
