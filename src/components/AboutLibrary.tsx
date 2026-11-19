import Image from "next/image";
import { Compass, Target } from "lucide-react";
import aboutLibraryStacksImg from "../../public/images/img_2085.jpg";
import librarianImg from "../../public/images/librarian-juliana.jpg";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeader } from "@/components/SectionHeader";
import { VerificationNotice } from "@/components/VerificationNotice";
import { LIBRARY_CONFIG } from "@/data/libraryConfig";
import { ABOUT_CONTENT } from "@/data/libraryContent";
import shared from "@/styles/shared.module.css";
import styles from "./AboutLibrary.module.css";

/**
 * Editorial section presenting the library overview, objectives, University Librarian, Vision, and Mission.
 */
export function AboutLibrary() {
  return (
    <section
      id="about"
      className={shared.sectionWhite}
      aria-labelledby="about-heading"
    >
      <div className={shared.container}>
        <SectionHeader
          eyebrow={ABOUT_CONTENT.eyebrow}
          title={ABOUT_CONTENT.heading}
          titleId="about-heading"
        />

          <ScrollReveal>
            <div className={styles.aboutGrid}>
              <div className={styles.mediaStack}>
                <figure className={styles.photoCard}>
                  <Image
                    src={aboutLibraryStacksImg}
                    alt="Godfrey Okoye University Library bookshelves, Library of Congress reference sections, and study tables"
                    className={styles.readingPhoto}
                    placeholder="blur"
                    sizes="(max-width: 920px) 100vw, 44vw"
                  />
                  <figcaption className={styles.photoCaption}>
                    Physical bookshelves, reference stacks, and reading desks inside the Godfrey Okoye University Library.
                  </figcaption>
                </figure>

                <article className={styles.librarianCard} aria-label="University Librarian">
                  <div className={styles.portraitFrame}>
                    <Image
                      src={librarianImg}
                      alt={`Portrait of ${LIBRARY_CONFIG.contact.librarianName}, University Librarian`}
                      width={152}
                      height={152}
                      className={styles.portraitImage}
                    />
                  </div>
                  <div>
                    <p className={styles.librarianLabel}>
                      {LIBRARY_CONFIG.contact.librarianRole}
                    </p>
                    <h3 className={styles.librarianName}>
                      {LIBRARY_CONFIG.contact.librarianName}
                    </h3>
                    <p className={styles.librarianNote}>
                      Principal Officer overseeing library collections, archival
                      stewardship, and scholarly services. Official Librarian
                      welcome message pending institutional confirmation.
                    </p>
                  </div>
                </article>
              </div>

              <div className={styles.copyColumn}>
                {ABOUT_CONTENT.introParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}

                <div className={styles.objectivesBlock}>
                  <h3 className={styles.objectivesHeading}>Core Library Objectives</h3>
                  <ol className={styles.objectivesList}>
                    {ABOUT_CONTENT.objectives.map((objective, idx) => (
                      <li key={objective} className={styles.objectiveItem}>
                        <span className={styles.objectiveIndex} aria-hidden="true">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delayStep={1}>
            <div className={styles.visionMissionGrid}>
              <article className={`${styles.statementBlock} ${styles.visionBlock}`}>
                <div className={styles.statementHeader}>
                  <Compass
                    size={22}
                    className={styles.statementIconGold}
                    aria-hidden="true"
                  />
                  <h3 className={styles.statementTitleInverse}>Library Vision</h3>
                </div>
                <p className={styles.statementTextInverse}>
                  {ABOUT_CONTENT.vision}
                </p>
              </article>

              <article className={`${styles.statementBlock} ${styles.missionBlock}`}>
                <div className={styles.statementHeader}>
                  <Target
                    size={22}
                    className={styles.statementIconGreen}
                    aria-hidden="true"
                  />
                  <h3 className={styles.statementTitle}>Library Mission</h3>
                </div>
                <p className={styles.statementText}>{ABOUT_CONTENT.mission}</p>
              </article>
            </div>
          </ScrollReveal>

          <VerificationNotice
            message={ABOUT_CONTENT.librarianMessageStatus}
            className={styles.noticeMargin}
          />
        </div>
    </section>
  );
}
