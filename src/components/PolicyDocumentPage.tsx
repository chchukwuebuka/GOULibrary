import Link from "next/link";
import { ArrowLeft, BookOpen, ChevronRight, FileCheck2 } from "lucide-react";
import { BackToTop } from "@/components/BackToTop";
import { LibraryFooter } from "@/components/LibraryFooter";
import { LibraryHeader } from "@/components/LibraryHeader";
import { VerificationNotice } from "@/components/VerificationNotice";
import {
  POLICY_DOCUMENTS,
  POLICY_NAV_LIST,
  type PolicySlug,
} from "@/data/libraryPoliciesData";
import shared from "@/styles/shared.module.css";
import styles from "./PolicyDocumentPage.module.css";

interface PolicyDocumentPageProps {
  slug: PolicySlug;
}

/**
 * Shared in-app layout rendering full Godfrey Okoye University Library policy and digital-media documentation.
 */
export function PolicyDocumentPage({ slug }: PolicyDocumentPageProps) {
  const doc = POLICY_DOCUMENTS[slug];

  return (
    <>
      <LibraryHeader />
      <main id="main-content">
        <section className={styles.pageBanner} aria-labelledby="policy-title">
          <div className={shared.container}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/" className={styles.breadcrumbLink}>
                <ArrowLeft size={14} aria-hidden="true" />
                <span>Library Home</span>
              </Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span>Policies &amp; Services</span>
              <ChevronRight size={14} aria-hidden="true" />
              <span aria-current="page">{doc.shortTitle}</span>
            </nav>

            <p className={styles.eyebrow}>{doc.eyebrow}</p>
            <h1 id="policy-title" className={styles.pageTitle}>
              {doc.title}
            </h1>
            <p className={styles.pageSummary}>{doc.summary}</p>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={`${shared.container} ${styles.layoutGrid}`}>
            <aside className={styles.sidebar} aria-label="Library policy navigation">
              <div className={styles.sidebarCard}>
                <h2 className={styles.sidebarHeading}>
                  Library Policies &amp; Guides
                </h2>
                <ul className={styles.sidebarList}>
                  {POLICY_NAV_LIST.map((item) => {
                    const isActive = item.slug === slug;
                    return (
                      <li key={item.slug}>
                        <Link
                          href={item.href}
                          className={
                            isActive
                              ? `${styles.sidebarLink} ${styles.sidebarLinkActive}`
                              : styles.sidebarLink
                          }
                          aria-current={isActive ? "page" : undefined}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h2 className={styles.sidebarHeading}>Explore Collections</h2>
                <div className={styles.sidebarLinksExtra}>
                  <Link href="/online-resources" className={shared.btnSecondary}>
                    <BookOpen size={15} aria-hidden="true" />
                    <span>Online Resources Directory</span>
                  </Link>
                  <Link href="/#catalogue" className={shared.btnPrimary}>
                    <span>Search Library Catalogue</span>
                  </Link>
                </div>
              </div>
            </aside>

            <article className={styles.documentCard}>
              <div className={styles.approvalMeta}>
                <FileCheck2 size={16} aria-hidden="true" />
                <span>{doc.approvalBadge}</span>
              </div>

              <div className={styles.sectionsStack}>
                {doc.sections.map((section) => (
                  <section key={section.heading} className={styles.docSection}>
                    <h2 className={styles.docHeading}>{section.heading}</h2>

                    {section.paragraphs?.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 32)}
                        className={styles.docParagraph}
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.orderedItems ? (
                      <ol className={styles.docOrderedList}>
                        {section.orderedItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ol>
                    ) : null}

                    {section.bullets ? (
                      <ul className={styles.docBulletList}>
                        {section.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>

              {doc.circulationRates ? (
                <div className={styles.tableWrap}>
                  <table className={styles.ratesTable}>
                    <thead>
                      <tr>
                        <th scope="col">Collection Type</th>
                        <th scope="col">Borrower Category</th>
                        <th scope="col">Borrowing Period</th>
                        <th scope="col">Overdue Fine (2011 Schedule)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {doc.circulationRates.map((row) => (
                        <tr key={`${row.category}-${row.userGroup}`}>
                          <td className={styles.tableStrong}>{row.category}</td>
                          <td>{row.userGroup}</td>
                          <td className={styles.tableStrong}>
                            {row.borrowingPeriod}
                          </td>
                          <td>{row.lateFine}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}

              <VerificationNotice
                message={doc.verificationMessage}
                className={styles.noticeMargin}
              />

              <div className={styles.bottomActions}>
                <Link href="/#resources" className={shared.btnSecondary}>
                  <ArrowLeft size={15} aria-hidden="true" />
                  <span>Back to Resources Overview</span>
                </Link>
                <Link href="/#contact" className={shared.btnPrimary}>
                  <span>Contact Library Desk</span>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
      <LibraryFooter />
      <BackToTop />
    </>
  );
}
