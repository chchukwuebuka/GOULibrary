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
import {
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
 * Sleek six-category resource grid on neutral canvas linking directly into in-app collections and guides.
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
            {
              RESOURCE_CATEGORIES.map((category, index) => {
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
    </div>
    </section >
  );
}
