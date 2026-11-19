import Link from "next/link";
import {
  Archive,
  ArrowRight,
  BookOpen,
  BookmarkCheck,
  Database,
  ExternalLink,
  FileText,
  Tablet,
} from "lucide-react";
import { ScrollReveal, type RevealDelayStep } from "@/components/ScrollReveal";
import { SectionHeader } from "@/components/SectionHeader";
import { LIBRARY_CONFIG } from "@/data/libraryConfig";
import {
  GOUNI_DATABASES,
  RESOURCE_CATEGORIES,
  type ResourceIconKey,
} from "@/data/libraryContent";
import shared from "@/styles/shared.module.css";
import styles from "./LibraryResources.module.css";

const RESOURCE_META_MAP: Record<
  ResourceIconKey,
  { icon: typeof BookOpen; label: string; toneClass: string }
> = {
  book: { icon: BookOpen, label: "Print Stacks", toneClass: "" },
  tablet: { icon: Tablet, label: "E-Books", toneClass: styles.iconBoxGreen },
  journal: { icon: FileText, label: "Periodicals", toneClass: "" },
  database: { icon: Database, label: "Databases", toneClass: styles.iconBoxGold },
  archive: { icon: Archive, label: "Open Archive", toneClass: styles.iconBoxGreen },
  bookmark: { icon: BookmarkCheck, label: "Reference & AV", toneClass: "" },
};

/**
 * Sleek six-category resource grid and official GOUNI databases directory under Resources.
 */
export function LibraryResources() {
  return (
    <section
      id="resources"
      className={shared.sectionLight}
      aria-labelledby="resources-heading"
    >
      <div className={shared.container}>
        <SectionHeader
          eyebrow="Collections & Holdings"
          title="Explore Our Resources"
          lead="Discover the academic materials and research resources available to support your learning."
          titleId="resources-heading"
        />

        <div className={styles.resourceGrid}>
          {RESOURCE_CATEGORIES.map((category, index) => {
            const meta = RESOURCE_META_MAP[category.icon];
            const Icon = meta.icon;
            const delayStep = (index % 3) as RevealDelayStep;
            return (
              <ScrollReveal key={category.id} delayStep={delayStep} stretch>
                <article className={styles.resourceCard}>
                  <div className={styles.cardHeaderRow}>
                    <span
                      className={
                        meta.toneClass
                          ? `${styles.iconBox} ${meta.toneClass}`
                          : styles.iconBox
                      }
                      aria-hidden="true"
                    >
                      <Icon size={21} />
                    </span>
                    <span className={styles.categoryTag}>{meta.label}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{category.title}</h3>
                  <p className={styles.cardDescription}>{category.description}</p>

                  <ul className={styles.chipList}>
                    {category.highlights.map((item) => (
                      <li key={item} className={styles.chipItem}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {category.actionHref && category.actionLabel ? (
                    <div className={styles.cardFooter}>
                      {category.external ? (
                        <a
                          href={category.actionHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.cardAction}
                        >
                          <span>{category.actionLabel}</span>
                          <span className={styles.arrowBadge} aria-hidden="true">
                            <ExternalLink size={14} />
                          </span>
                        </a>
                      ) : (
                        <Link
                          href={category.actionHref}
                          className={styles.cardAction}
                        >
                          <span>{category.actionLabel}</span>
                          <span className={styles.arrowBadge} aria-hidden="true">
                            <ArrowRight size={14} />
                          </span>
                        </Link>
                      )}
                    </div>
                  ) : null}
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delayStep={1}>
          <div
            id="gouni-databases"
            className={styles.databasesPanel}
            aria-labelledby="gouni-databases-heading"
          >
            <div className={styles.databasesHeader}>
              <div>
                <p className={styles.databasesEyebrow}>
                  Godfrey Okoye University Enugu
                </p>
                <h3 id="gouni-databases-heading" className={styles.databasesTitle}>
                  List of GOUNI Databases
                </h3>
                <p className={styles.databasesLead}>
                  Direct access portals for subscribed academic databases,
                  open-access medical platforms, Nigerian &amp; international
                  legal research systems, and GOUNI Turnitin.
                </p>
              </div>

              <Link
                href="/online-resources?category=databases"
                className={shared.btnSecondary}
              >
                <span>Filter Full Directory</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.databasesGrid}>
              {GOUNI_DATABASES.map((db, idx) => {
                const badgeClass =
                  db.accessMode === "Open Access"
                    ? styles.dbBadgeOpen
                    : db.accessMode === "Confirm Link"
                      ? styles.dbBadgePending
                      : styles.dbBadgeLogin;

                return (
                  <article key={db.id} className={styles.dbCard}>
                    <div>
                      <div className={styles.dbTopRow}>
                        <span className={styles.dbIndex}>
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className={badgeClass}>{db.accessMode}</span>
                      </div>
                      <h4 className={styles.dbTitle}>{db.title}</h4>
                      <p className={styles.dbDiscipline}>{db.discipline}</p>
                    </div>

                    {db.url ? (
                      <a
                        href={db.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.dbLink}
                      >
                        <span>{db.actionLabel}</span>
                        <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    ) : (
                      <Link href="/#contact" className={styles.dbPendingText}>
                        {db.actionLabel}
                      </Link>
                    )}
                  </article>
                );
              })}
            </div>

            <p className={styles.databasesFooterNote}>
              Need login credentials for institutional databases or Turnitin?
              Visit the Reference Desk or call{" "}
              <a
                href={LIBRARY_CONFIG.contact.libraryDeskTelHref}
                className={styles.databasesPhoneLink}
              >
                {LIBRARY_CONFIG.contact.libraryDeskPhone}
              </a>
              .
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
