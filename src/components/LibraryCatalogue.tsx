"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  Archive,
  BookMarked,
  CheckCircle2,
  ExternalLink,
  Search,
} from "lucide-react";
import { LIBRARY_CONFIG } from "@/data/libraryConfig";
import shared from "@/styles/shared.module.css";
import styles from "./LibraryCatalogue.module.css";

type SearchTarget = "opac" | "repository";

const STUDENT_TOPIC_PRESETS = [
  "Research Methodology",
  "Nigerian Constitutional Law",
  "Accounting & Finance",
  "Microbiology",
  "Computer Science",
];

/**
 * Interactive student discovery gateway connecting GOUNI's Mandarin M5 OPAC and EPrints Repository.
 */
export function LibraryCatalogue() {
  const [query, setQuery] = useState("");
  const [target, setTarget] = useState<SearchTarget>("opac");
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = query.trim();

    if (target === "repository") {
      const searchUrl = trimmed
        ? `${LIBRARY_CONFIG.repository.searchActionUrl}?q=${encodeURIComponent(trimmed)}&_action_search=Search`
        : LIBRARY_CONFIG.repository.baseUrl;
      window.open(searchUrl, "_blank", "noopener,noreferrer");
      setFeedback(
        trimmed
          ? `Opened GOUNI Institutional Repository search for "${trimmed}" in a new tab.`
          : "Opened GOUNI Institutional Repository in a new tab."
      );
      return;
    }

    if (trimmed && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(trimmed);
        setFeedback(
          `Copied "${trimmed}" to your clipboard and opened the Mandarin M5 Library Catalogue. Paste it directly into the OPAC search box.`
        );
      } catch {
        setFeedback(
          `Opened the Mandarin M5 Library Catalogue. Enter "${trimmed}" in the OPAC search field.`
        );
      }
    } else if (trimmed) {
      setFeedback(
        `Opened the Mandarin M5 Library Catalogue. Enter "${trimmed}" in the OPAC search field.`
      );
    } else {
      setFeedback("Opened the official Mandarin M5 Library Catalogue in a new tab.");
    }

    window.open(LIBRARY_CONFIG.catalogue.baseUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="catalogue"
      className={shared.sectionWhite}
      aria-labelledby="catalogue-heading"
    >
      <div className={shared.container}>
        <div className={styles.catalogueStage}>
          <div className={styles.stageHeader}>
            <p className={styles.eyebrow}>Library Catalogue &amp; Discovery</p>
            <h2 id="catalogue-heading" className={styles.heading}>
              Find What You&apos;re Looking For
            </h2>
            <p className={styles.description}>
              Search the library catalogue to discover books, publications and
              other academic materials.
            </p>
          </div>

          <div className={styles.searchCard}>
            <div
              className={styles.targetSwitcher}
              role="group"
              aria-label="Choose discovery destination"
            >
              <button
                type="button"
                className={
                  target === "opac"
                    ? `${styles.targetBtn} ${styles.targetBtnActive}`
                    : styles.targetBtn
                }
                aria-pressed={target === "opac"}
                onClick={() => {
                  setTarget("opac");
                  setFeedback(null);
                }}
              >
                <BookMarked size={15} aria-hidden="true" />
                <span>Library Book Catalogue (Mandarin M5 OPAC)</span>
              </button>

              <button
                type="button"
                className={
                  target === "repository"
                    ? `${styles.targetBtn} ${styles.targetBtnActive}`
                    : styles.targetBtn
                }
                aria-pressed={target === "repository"}
                onClick={() => {
                  setTarget("repository");
                  setFeedback(null);
                }}
              >
                <Archive size={15} aria-hidden="true" />
                <span>Institutional Repository (Direct Query)</span>
              </button>
            </div>

            <form className={styles.searchForm} onSubmit={handleSearch}>
              <div className={styles.inputWrap}>
                <label htmlFor="library-catalogue-search" className={styles.srOnly}>
                  Search for books, authors, titles or subjects
                </label>
                <Search
                  size={19}
                  className={styles.searchIcon}
                  aria-hidden="true"
                />
                <input
                  id="library-catalogue-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for books, authors, titles or subjects..."
                  className={styles.searchInput}
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                <span>
                  {target === "repository"
                    ? "Search Repository"
                    : "Launch Catalogue"}
                </span>
                <ExternalLink size={16} aria-hidden="true" />
              </button>
            </form>

            <div className={styles.presetsRow}>
              <span className={styles.presetsLabel}>Try a topic:</span>
              {STUDENT_TOPIC_PRESETS.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => setQuery(topic)}
                  className={styles.presetChip}
                >
                  {topic}
                </button>
              ))}
            </div>

            <div className={styles.helperRow}>
              <span>
                {target === "opac"
                  ? LIBRARY_CONFIG.catalogue.searchGuidance
                  : "Queries are sent directly to GOUNI’s EPrints Institutional Repository (eprints.gouni.edu.ng)."}
              </span>
            </div>

            {feedback ? (
              <div className={styles.statusBanner} role="status" aria-live="polite">
                <CheckCircle2
                  size={16}
                  className={styles.statusBannerIcon}
                  aria-hidden="true"
                />
                <span>{feedback}</span>
              </div>
            ) : null}
          </div>

          <div className={styles.actionsFooter}>
            <a
              href={LIBRARY_CONFIG.catalogue.baseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={shared.btnPrimary}
            >
              <span>Open Library Catalogue</span>
              <ExternalLink size={16} aria-hidden="true" />
            </a>

            <Link href="/online-resources" className={shared.btnSecondary}>
              <span>Browse Online Databases Directory</span>
            </Link>
          </div>

          <p className={styles.standardsNote}>
            Catalogued to Library of Congress Classification, AACR2R, and MARC
            21 bibliographic standards (
            <Link href="/cataloging-policy">View Cataloging Policy</Link>).
          </p>
        </div>
      </div>
    </section>
  );
}
