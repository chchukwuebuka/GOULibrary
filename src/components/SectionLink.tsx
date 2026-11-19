"use client";

import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SectionLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  onNavigate?: (sectionId?: string) => void;
  ariaCurrent?: "location" | "page";
}

function extractSectionId(href: string): string | null {
  if (href.startsWith("/#")) return href.slice(2);
  if (href.startsWith("#")) return href.slice(1);
  return null;
}

/**
 * Navigation link that guarantees smooth scrolling on the home page even when the hash is already active,
 * while routing back from subpages via Next.js Link.
 */
export function SectionLink({
  href,
  className,
  children,
  onNavigate,
  ariaCurrent,
}: SectionLinkProps) {
  const pathname = usePathname();
  const sectionId = extractSectionId(href);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!sectionId || pathname !== "/") {
      onNavigate?.();
      return;
    }

    const target = document.getElementById(sectionId);
    if (!target) {
      onNavigate?.();
      return;
    }

    event.preventDefault();
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    target.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "start",
    });

    if (window.location.hash !== `#${sectionId}`) {
      window.history.replaceState(null, "", `#${sectionId}`);
    }
    window.dispatchEvent(new Event("gouni:reveal-sync"));
    onNavigate?.(sectionId);
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
      aria-current={ariaCurrent}
    >
      {children}
    </Link>
  );
}
