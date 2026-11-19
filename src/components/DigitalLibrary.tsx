import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookUser,
  ExternalLink,
  GraduationCap,
  LockKeyhole,
  Users,
} from "lucide-react";
import collaborativeStudyImg from "../../public/images/img_2088.png";
import { ScrollReveal, type RevealDelayStep } from "@/components/ScrollReveal";
import { SectionHeader } from "@/components/SectionHeader";
import { LIBRARY_CONFIG } from "@/data/libraryConfig";
import { DIGITAL_AUDIENCE_TIERS } from "@/data/libraryContent";
import shared from "@/styles/shared.module.css";
import styles from "./DigitalLibrary.module.css";

const AUDIENCE_ICONS = [GraduationCap, BookUser, Users];

/**
 * Digital library access portal guide explaining off-campus repository access and authenticated databases.
 */
export function DigitalLibrary() {
  return (
    <section
      id="digital-library"
      className={shared.sectionNavy}
      aria-labelledby="digital-library-heading"
    >
      <div className={shared.container}>
        <div className={styles.digitalTopRow}>
          <div className={styles.copyColumn}>
            <SectionHeader
              eyebrow="Digital Library Access"
              title="Your Library, Beyond the Campus"
              lead="Access academic resources and discover digital learning materials wherever you are."
              compact
              inverse
              titleId="digital-library-heading"
            />
            <p className={styles.introText}>
              Through the GOUNI Online Resources Directory and the open-access
              GOUNI Institutional Repository, students, academic staff, and
              researchers can consult peer-reviewed journals, open courseware,
              and institutional scholarship from both on-campus workstations and
              remote connections.
            </p>
            <div className={styles.ctaGroup}>
              <Link
                href={LIBRARY_CONFIG.portals.onlineResources}
                className={shared.btnGold}
              >
                <span>Explore Digital Resources</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a
                href={LIBRARY_CONFIG.repository.baseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnOutlineLight}
              >
                <span>Browse GOUNI Repository</span>
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <figure className={styles.mediaFrame}>
            <Image
              src={collaborativeStudyImg}
              alt="Godfrey Okoye University students collaborating around a study table with printed university publications"
              className={styles.digitalImage}
              placeholder="blur"
              sizes="(max-width: 960px) 100vw, 48vw"
            />
            <figcaption className={styles.mediaCaption}>
              Academic collaboration and guided scholarly study at Godfrey Okoye University.
            </figcaption>
          </figure>
        </div>

        <div className={styles.audienceGrid}>
          {DIGITAL_AUDIENCE_TIERS.map((tier, index) => {
            const Icon = AUDIENCE_ICONS[index];
            const delayStep = (index % 3) as RevealDelayStep;
            return (
              <ScrollReveal key={tier.id} delayStep={delayStep} stretch>
                <article className={styles.audienceCard}>
                  <div className={styles.audienceHeader}>
                    <span className={styles.audienceIconWrap} aria-hidden="true">
                      <Icon size={19} />
                    </span>
                    <h3 className={styles.audienceTitle}>{tier.audience}</h3>
                  </div>
                  <p className={styles.audienceSummary}>{tier.summary}</p>
                  <ul className={styles.audienceList}>
                    {tier.points.map((point) => (
                      <li key={point} className={styles.audiencePoint}>
                        <span className={styles.pointDot} aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <aside className={styles.authNote} aria-label="Digital access authentication notice">
          <LockKeyhole
            size={18}
            className={styles.authNoteIcon}
            aria-hidden="true"
          />
          <p>
            <strong>Authorised Access Note:</strong> Some licensed databases
            listed on the GOUNI Online Resources portal (such as Research4Life /
            AGORA / ARDI / HINARI or subscribed publisher collections) require
            current university credentials or librarian-issued passwords. Please
            verify active database availability and remote access instructions
            with the Reference Desk.
          </p>
        </aside>
      </div>
    </section>
  );
}
