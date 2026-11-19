"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeader } from "@/components/SectionHeader";
import { VerificationNotice } from "@/components/VerificationNotice";
import {
  ACCESS_STEPS,
  USER_CATEGORY_GUIDES,
} from "@/data/libraryContent";
import shared from "@/styles/shared.module.css";
import styles from "./LibraryAccess.module.css";

/**
 * Connected onboarding stepper and interactive role-based membership requirements guide.
 */
export function LibraryAccess() {
  const [selectedRoleId, setSelectedRoleId] = useState<string>(
    USER_CATEGORY_GUIDES[0]?.id ?? "undergraduate"
  );

  const activeGuide =
    USER_CATEGORY_GUIDES.find((guide) => guide.id === selectedRoleId) ??
    USER_CATEGORY_GUIDES[0];

  return (
    <section
      id="access"
      className={shared.sectionWhite}
      aria-labelledby="access-heading"
    >
      <div className={shared.container}>
        <SectionHeader
          eyebrow="Access & Membership"
          title="How to Access the University Library"
          lead="Follow these five steps to register, enter the library, and begin using physical and electronic study collections."
          titleId="access-heading"
        />

        <ScrollReveal>
        <div
          className={styles.stepsGrid}
          role="list"
          aria-label="Library access steps"
        >
          {ACCESS_STEPS.map((step) => (
            <article
              key={step.stepNumber}
              className={styles.stepCard}
              role="listitem"
            >
              <div className={styles.stepNumberRow}>
                <span className={styles.stepCircle}>{step.stepNumber}</span>
                <span className={styles.stepRule} aria-hidden="true" />
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </article>
          ))}
        </div>
        </ScrollReveal>

        <ScrollReveal delayStep={1}>
        <div className={styles.rolePanelShell}>
          <div className={styles.roleHeader}>
            <div>
              <h3 className={styles.categoriesHeading}>
                Requirements by User Category
              </h3>
              <p className={styles.categoriesLead}>
                Select your role below to inspect identification, borrowing, and
                clearance rules.
              </p>
            </div>
            <Link href="/circulation-policy" className={shared.btnSecondary}>
              <span>Full Circulation Table</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div
            className={styles.roleTabs}
            role="tablist"
            aria-label="Select library user category"
          >
            {USER_CATEGORY_GUIDES.map((guide) => {
              const isSelected = guide.id === activeGuide.id;
              return (
                <button
                  key={guide.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`role-panel-${guide.id}`}
                  id={`role-tab-${guide.id}`}
                  onClick={() => setSelectedRoleId(guide.id)}
                  className={
                    isSelected
                      ? `${styles.roleTabBtn} ${styles.roleTabBtnActive}`
                      : styles.roleTabBtn
                  }
                >
                  {guide.role}
                </button>
              );
            })}
          </div>

          <article
            id={`role-panel-${activeGuide.id}`}
            role="tabpanel"
            aria-labelledby={`role-tab-${activeGuide.id}`}
            className={styles.roleCard}
          >
            <div className={styles.roleTopRow}>
              <h4 className={styles.categoryRole}>{activeGuide.role}</h4>
              <span className={shared.badgeVerified}>
                GOU / IECE Membership Guide
              </span>
            </div>
            <p className={styles.categorySummary}>{activeGuide.summary}</p>
            <ul className={styles.reqList}>
              {activeGuide.requirements.map((req) => (
                <li key={req} className={styles.reqItem}>
                  <CheckCircle2
                    size={16}
                    className={styles.reqIcon}
                    aria-hidden="true"
                  />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
        </ScrollReveal>

        <VerificationNotice
          message="These access steps combine Senate-approved identification rules with a structured onboarding guide. Current semester registration forms, borrowing limits, and postgraduate quotas must be confirmed by the University Librarian prior to formal publication."
          className={styles.noticeMargin}
        />
      </div>
    </section>
  );
}
