import Link from "next/link";
import {
  ArrowRight,
  BookCopy,
  Building2,
  Laptop,
  ShieldCheck,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { LIBRARY_CONFIG } from "@/data/libraryConfig";
import { REGULATION_CATEGORIES } from "@/data/libraryContent";
import shared from "@/styles/shared.module.css";
import styles from "./LibraryRegulations.module.css";

const CATEGORY_ICONS = [ShieldCheck, BookCopy, Building2, Laptop];

/**
 * Organised summary of Senate-approved Library Rules and Circulation Policy guidelines linking to in-app policy pages.
 */
export function LibraryRegulations() {
  return (
    <section
      id="regulations"
      className={shared.sectionLight}
      aria-labelledby="regulations-heading"
    >
      <div className={shared.container}>
        <SectionHeader
          eyebrow="Rules & Regulations"
          title="Using the Library Responsibly"
          lead="Essential conduct, borrowing, facility, and digital-use guidelines preserving a calm, scholarly environment for every member of the university community."
          titleId="regulations-heading"
        />

        <div className={styles.rulesGrid}>
          {REGULATION_CATEGORIES.map((category, index) => {
            const Icon = CATEGORY_ICONS[index];
            return (
              <article key={category.id} className={styles.ruleCard}>
                <div className={styles.ruleHeader}>
                  <span className={styles.ruleIcon} aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <h3 className={styles.ruleTitle}>{category.title}</h3>
                </div>

                <ul className={styles.ruleList}>
                  {category.rules.map((rule) => (
                    <li key={rule} className={styles.ruleItem}>
                      {rule}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className={styles.actionsBar}>
          <p className={styles.policyMeta}>
            <strong>Senate Governance:</strong> Drawn from the Basic Library
            Rules (Senate approved June 2010) and Circulation Policy (amended
            March 2011). Read the full official library policy documents right
            here inside this portal.
          </p>

          <div className={styles.policyLinks}>
            <Link
              href={LIBRARY_CONFIG.portals.libraryRules}
              className={shared.btnPrimary}
            >
              <span>View Complete Library Regulations</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              href={LIBRARY_CONFIG.portals.circulationPolicy}
              className={shared.btnSecondary}
            >
              <span>Circulation Policy</span>
            </Link>
            <Link
              href={LIBRARY_CONFIG.portals.catalogingPolicy}
              className={shared.btnSecondary}
            >
              <span>Cataloging Policy</span>
            </Link>
            <Link
              href={LIBRARY_CONFIG.portals.collectionPolicy}
              className={shared.btnSecondary}
            >
              <span>Collection Development</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
