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
 * Content starts visible on SSR and only animates elements positioned below the initial viewport.
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

    const rect = element.getBoundingClientRect();
    const isBelowFold = rect.top > window.innerHeight * 0.94;

    if (!isBelowFold) {
      element.dataset.reveal = "visible";
      return;
    }

    element.dataset.reveal = "hidden";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
            element.dataset.reveal = "visible";
            observer.disconnect();
            break;
          }
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -32px 0px",
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
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
