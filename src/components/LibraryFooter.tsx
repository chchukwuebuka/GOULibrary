import Image from "next/image";
import { cacheLife } from "next/cache";
import { ExternalLink } from "lucide-react";
import uniLogoImg from "../../public/images/gou-uni-logo.png";
import { SectionLink } from "@/components/SectionLink";
import { LIBRARY_CONFIG } from "@/data/libraryConfig";
import { FOOTER_COLUMNS } from "@/data/libraryNavigation";
import shared from "@/styles/shared.module.css";
import styles from "./LibraryFooter.module.css";

async function CachedYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

/**
 * Institutional footer matching Godfrey Okoye University's brand architecture and copyright standards.
 */
export function LibraryFooter() {
  return (
    <footer className={styles.footerRoot}>
      <div className={`${shared.container} ${styles.footerMain}`}>
        <div className={styles.footerGrid}>
          <div className={styles.brandBlock}>
            <a
              href={LIBRARY_CONFIG.portals.universityWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoWrap}
            >
              <Image
                src={uniLogoImg}
                alt="Godfrey Okoye University official logo"
                width={196}
                height={40}
              />
            </a>

            <p className={styles.footerDescription}>
              Official information portal for the{" "}
              {LIBRARY_CONFIG.libraryName} — supporting teaching, evidence-based
              research, information literacy, and epistemic unity across the
              university community.
            </p>

            <div
              className={styles.socialRow}
              aria-label="Official university social media"
            >
              <a
                href={LIBRARY_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Godfrey Okoye University on Facebook"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href={LIBRARY_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Godfrey Okoye University on LinkedIn"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={LIBRARY_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Godfrey Okoye University on Instagram"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <h2 className={styles.columnHeading}>{column.heading}</h2>
              <ul className={styles.linkList}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.footerLink}
                      >
                        <span>{link.label}</span>
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    ) : (
                      <SectionLink href={link.href} className={styles.footerLink}>
                        <span>{link.label}</span>
                      </SectionLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className={styles.columnHeading}>Library Contact</h2>
            <div className={styles.contactStack}>
              <p>{LIBRARY_CONFIG.contact.campusAddress}</p>
              <p>Postal Box: {LIBRARY_CONFIG.contact.postalBox}</p>
              <p>
                Library Desk:{" "}
                <a
                  href={LIBRARY_CONFIG.contact.libraryDeskTelHref}
                  className={styles.footerLink}
                >
                  {LIBRARY_CONFIG.contact.libraryDeskPhone}
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${LIBRARY_CONFIG.contact.primaryEmail}`}
                  className={styles.footerLink}
                >
                  {LIBRARY_CONFIG.contact.primaryEmail}
                </a>
              </p>
              <p>
                Registry:{" "}
                <a
                  href={`mailto:${LIBRARY_CONFIG.contact.registrarEmail}`}
                  className={styles.footerLink}
                >
                  {LIBRARY_CONFIG.contact.registrarEmail}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyrightBar}>
        <div className={`${shared.container} ${styles.copyrightInner}`}>
          <p>
            &copy; <CachedYear /> Godfrey Okoye University. All Rights Reserved.
          </p>
          <p>
            <a
              href={LIBRARY_CONFIG.portals.universityWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.copyrightLink}
            >
              gouni.edu.ng
            </a>{" "}
            · Enugu State, Nigeria
          </p>
        </div>
      </div>
    </footer >
  );
}
