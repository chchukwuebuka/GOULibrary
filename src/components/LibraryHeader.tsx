"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookSearch, ExternalLink, Menu, Phone, X } from "lucide-react";
import crestImg from "../../public/images/gou-crest.jpg";
import { SectionLink } from "@/components/SectionLink";
import { LIBRARY_CONFIG } from "@/data/libraryConfig";
import {
  HEADER_UTILITY_LINKS,
  LIBRARY_NAV_ITEMS,
} from "@/data/libraryNavigation";
import shared from "@/styles/shared.module.css";
import styles from "./LibraryHeader.module.css";

/**
 * Official sticky institutional header supporting reliable smooth section scrolling and subpage navigation.
 */
export function LibraryHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const sectionIds = LIBRARY_NAV_ITEMS.map((item) => item.sectionId);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.05, 0.25],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const handleSectionNavigate = (sectionId?: string) => {
    setMobileOpen(false);
    if (sectionId) {
      setActiveSection(sectionId);
    }
  };

  return (
    <header
      className={
        scrolled
          ? `${styles.headerRoot} ${styles.headerScrolled}`
          : styles.headerRoot
      }
    >
      <div className={styles.utilityBar}>
        <div className={`${shared.container} ${styles.utilityInner}`}>
          <div className={styles.utilityMeta}>
            <a
              href={LIBRARY_CONFIG.contact.libraryDeskTelHref}
              className={styles.utilityPhone}
            >
              <Phone size={13} aria-hidden="true" />
              <span>Library Desk: {LIBRARY_CONFIG.contact.libraryDeskPhone}</span>
            </a>
            <span className={styles.utilityDivider} aria-hidden="true" />
            <span className={styles.utilityHoursBadge}>
              In-Session Hours: Mon–Fri 8:15 AM – 9:00 PM
            </span>
          </div>

          <ul className={styles.utilityLinks}>
            {HEADER_UTILITY_LINKS.map((link) => (
              <li key={link.label}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.utilityLink}
                  >
                    <span>{link.label}</span>
                    <ExternalLink size={11} aria-hidden="true" />
                  </a>
                ) : (
                  <Link href={link.href} className={styles.utilityLink}>
                    <span>{link.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.navBar}>
        <div className={`${shared.container} ${styles.navInner}`}>
          <SectionLink
            href="/#home"
            className={styles.brandLink}
            onNavigate={handleSectionNavigate}
          >
            <span className={styles.crestWrap}>
              <Image
                src={crestImg}
                alt="Godfrey Okoye University official crest"
                width={44}
                height={44}
                className={styles.crestImage}
                priority
              />
            </span>
            <span className={styles.brandText}>
              <span className={styles.brandInstitution}>
                {LIBRARY_CONFIG.institutionName}
              </span>
              <span className={styles.brandUnit}>University Library</span>
            </span>
          </SectionLink>

          <nav className={styles.desktopNav} aria-label="Primary library navigation">
            <ul className={styles.navList}>
              {LIBRARY_NAV_ITEMS.map((item) => {
                const isActive = isHome && activeSection === item.sectionId;
                return (
                  <li key={item.sectionId}>
                    <SectionLink
                      href={item.href}
                      onNavigate={handleSectionNavigate}
                      className={
                        isActive
                          ? `${styles.navLink} ${styles.navLinkActive}`
                          : styles.navLink
                      }
                      ariaCurrent={isActive ? "location" : undefined}
                    >
                      {item.label}
                    </SectionLink>
                  </li>
                );
              })}
            </ul>

            <SectionLink
              href="/#catalogue"
              className={styles.catalogueCta}
              onNavigate={handleSectionNavigate}
            >
              <BookSearch size={16} aria-hidden="true" />
              <span>Library Catalogue</span>
            </SectionLink>
          </nav>

          <button
            type="button"
            className={styles.mobileToggle}
            aria-expanded={mobileOpen}
            aria-controls="mobile-library-nav"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div >

    {
      mobileOpen?(
          <nav
            id = "mobile-library-nav"
            className = { styles.mobileMenu }
            aria- label="Mobile library navigation"
    >
            <div className={shared.container}>
              <ul className={styles.mobileList}>
                {LIBRARY_NAV_ITEMS.map((item) => {
                  const isActive = isHome && activeSection === item.sectionId;
                  return (
                    <li key={item.sectionId}>
                      <SectionLink
                        href={item.href}
                        onNavigate={handleSectionNavigate}
                        className={
                          isActive
                            ? `${styles.mobileLink} ${styles.mobileLinkActive}`
                            : styles.mobileLink
                        }
                        ariaCurrent={isActive ? "location" : undefined}
                      >
                        <span>{item.label}</span>
                      </SectionLink>
                    </li>
                  );
                })}
              </ul>

              <div className={styles.mobileActions}>
                <SectionLink
                  href="/#catalogue"
                  onNavigate={handleSectionNavigate}
                  className={styles.mobileCta}
                >
                  <BookSearch size={18} aria-hidden="true" />
                  <span>Library Catalogue</span>
                </SectionLink>
                <div className={styles.mobileUtilityRow}>
                  {HEADER_UTILITY_LINKS.map((link) =>
                    link.external ? (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.mobileUtilityLink}
                      >
                        <span>{link.label}</span>
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    ) : (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={styles.mobileUtilityLink}
                      >
                        <span>{link.label}</span>
                      </Link>
                    )
                  )}
                </div>
              </div >
            </div >
          </nav >
        ) : null
}
      </div >
    </header >
  );
}
