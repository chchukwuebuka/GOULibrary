"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ChevronRight,
  ExternalLink,
  KeyRound,
  Search,
} from "lucide-react";
import { VerificationNotice } from "@/components/VerificationNotice";
import {
  ONLINE_RESOURCE_CATEGORIES,
  ONLINE_RESOURCES_LIST,
  type OnlineResourceCategory,
  type ResourceAccessType,
} from "@/data/onlineResourcesData";
import shared from "@/styles/shared.module.css";
import styles from "./OnlineResourcesDirectory.module.css";

type CategoryFilter = "all" | OnlineResourceCategory;
type AccessFilter = "all" | ResourceAccessType;

const VALID_CATEGORIES = new Set<string>(
  ONLINE_RESOURCE_CATEGORIES.map((c) => c.id)
);

const ACCESS_LABELS: Record<ResourceAccessType, string> = {
  open: "Open Access",
  "registration-free": "Free Registration",
  "librarian-assisted": "Librarian-Assisted Access",
};

/**
 * Interactive in-app directory of GOUNI e-books, journals, Research4Life databases, and repositories.
 */
export function OnlineResourcesDirectory() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category") ?? "all";
  const selectedCategory: CategoryFilter = VALID_CATEGORIES.has(urlCategory)
    ? (urlCategory as CategoryFilter)
    : "all";

  const [selectedAccess, setSelectedAccess] = useState<AccessFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredResources = ONLINE_RESOURCES_LIST.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesAccess =
      selectedAccess === "all" || item.accessType === selectedAccess;
    const matchesQuery =
      normalizedQuery === "" ||
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery) ||
      item.subjectArea.toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesAccess && matchesQuery;
  });

  const selectCategory = (categoryId: CategoryFilter) => {
    const targetUrl =
      categoryId === "all"
        ? "/online-resources"
        : `/online-resources?category=${categoryId}`;
    router.replace(targetUrl, { scroll: false });
  };

  const resetFilters = () => {
    setSelectedAccess("all");
    setSearchQuery("");
    router.replace("/online-resources", { scroll: false });
  };

  return (
    <>
      <section className={styles.banner} aria-labelledby="online-resources-title">
        <div className={shared.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>
              <ArrowLeft size={14} aria-hidden="true" />
              <span>Library Home</span>
            </Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">Online Resources Directory</span>
          </nav>

          <p className={styles.eyebrow}>Digital Collections &amp; Databases</p>
          <h1 id="online-resources-title" className={styles.title}>
            Online Resources &amp; Scholarly Databases
          </h1>
          <p className={styles.lead}>
            Browse Godfrey Okoye University Library’s curated directory of
            electronic books, peer-reviewed journals, Research4Life databases,
            open courseware, and institutional archives right here inside the
            library portal.
          </p>
        </div>
      </section>

      <section className={styles.directorySection}>
        <div className={shared.container}>
          <div className={styles.controlsBox}>
            <div className={styles.searchRow}>
              <div className={styles.searchInputWrap}>
                <label htmlFor="online-resources-filter" className={styles.srOnly}>
                  Filter online resources by name or subject
                </label>
                <Search
                  size={17}
                  className={styles.searchIcon}
                  aria-hidden="true"
                />
                <input
                  id="online-resources-filter"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter databases, journals, e-books, or subjects..."
                  className={styles.searchInput}
                />
              </div>

              <div
                className={styles.accessFilterGroup}
                role="group"
                aria-label="Filter by access mode"
              >
                {(
                  [
                    { id: "all", label: "All Access Modes" },
                    { id: "open", label: "Open Access" },
                    { id: "librarian-assisted", label: "Librarian-Assisted" },
                  ] as const
                ).map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setSelectedAccess(mode.id)}
                    aria-pressed={selectedAccess === mode.id}
                    className={
                      selectedAccess === mode.id
                        ? `${styles.filterBtn} ${styles.filterBtnActive}`
                        : styles.filterBtn
                    }
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>

            <div
              className={styles.categoryTabs}
              role="group"
              aria-label="Filter by resource category"
            >
              {ONLINE_RESOURCE_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => selectCategory(category.id)}
                  aria-pressed={selectedCategory === category.id}
                  className={
                    selectedCategory === category.id
                      ? `${styles.filterBtn} ${styles.filterBtnActive}`
                      : styles.filterBtn
                  }
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.resultsMeta}>
            <p>
              Showing <strong>{filteredResources.length}</strong> of{" "}
              {ONLINE_RESOURCES_LIST.length} listed resources
            </p>
            <Link href="/#contact" className={styles.portalLink}>
              <span>Need database passwords? Contact Reference Desk</span>
            </Link>
          </div>

          {filteredResources.length === 0 ? (
            <div className={styles.emptyState}>
              <h2 className={styles.emptyTitle}>No matching resources found</h2>
              <p className={styles.emptyCopy}>
                Try clearing your search terms or switching back to All
                Resources.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className={shared.btnPrimary}
              >
                Reset Directory Filters
              </button>
            </div>
          ) : (
            <div className={styles.cardsGrid}>
              {filteredResources.map((resource) => {
                const isLibrarianAssisted =
                  resource.accessType === "librarian-assisted";
                return (
                  <article key={resource.id} className={styles.resourceCard}>
                    <div className={styles.cardTop}>
                      <span className={styles.subjectTag}>
                        {resource.subjectArea}
                      </span>
                      <span
                        className={
                          isLibrarianAssisted
                            ? shared.badgePending
                            : shared.badgeVerified
                        }
                      >
                        {ACCESS_LABELS[resource.accessType]}
                      </span>
                    </div>

                    <h2 className={styles.cardTitle}>{resource.title}</h2>
                    <p className={styles.cardDesc}>{resource.description}</p>

                    <div className={styles.accessNoteBox}>
                      <KeyRound
                        size={15}
                        className={styles.accessNoteIcon}
                        aria-hidden="true"
                      />
                      <span>{resource.accessInstruction}</span>
                    </div>

                    <div className={styles.cardActions}>
                      {resource.url ? (
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.portalLink}
                        >
                          <span>Open Resource Portal</span>
                          <ExternalLink size={14} aria-hidden="true" />
                        </a>
                      ) : (
                        <Link href="/#contact" className={styles.portalLink}>
                          <span>Request Access via Reference Desk</span>
                        </Link>
                      )}

                      {resource.secondaryUrl && resource.secondaryLabel ? (
                        <a
                          href={resource.secondaryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.portalLink}
                        >
                          <span>{resource.secondaryLabel}</span>
                          <ExternalLink size={14} aria-hidden="true" />
                        </a>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          <VerificationNotice
            message="This resource catalogue consolidates the official Godfrey Okoye University online resources list (last dated 1 November 2017 on the legacy portal). Active publisher subscriptions, Research4Life passwords, and ProQuest renewal status should be confirmed with library personnel before use."
            className={styles.noticeTop}
          />
        </div>
      </section>
    </>
  );
}
