import Image from "next/image";
import Link from "next/link";
import {
  Armchair,
  ArrowRight,
  BookOpen,
  Clock,
  Compass,
  ExternalLink,
  Globe,
} from "lucide-react";
import heroElibraryImg from "../../public/images/img_2086.png";
import { LIBRARY_CONFIG } from "@/data/libraryConfig";
import { HERO_PILLARS } from "@/data/libraryContent";
import shared from "@/styles/shared.module.css";
import styles from "./LibraryHero.module.css";

const PILLAR_ICONS = [BookOpen, Globe, Compass, Armchair];

/**
 * Editorial hero section introducing the Godfrey Okoye University Library portal with quick student access paths.
 */
export function LibraryHero() {
  return (
    <section
      id="home"
      className={styles.heroSection}
      aria-labelledby="hero-heading"
    >
      <div className={shared.container}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrowPill}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              <span>GODFREY OKOYE UNIVERSITY LIBRARY</span>
            </p>
            <h1 id="hero-heading" className={styles.heroHeading}>
              Knowledge. Discovery. Excellence.
            </h1>
            <p className={styles.heroCopy}>
              Welcome to the Godfrey Okoye University Library, a centre for
              learning, research and intellectual discovery. Explore our
              collections, access academic resources and discover the facilities
              designed to support your educational journey.
            </p>

            <div className={styles.ctaRow}>
              <a href="#resources" className={shared.btnPrimary}>
                <span>Explore Library Resources</span>
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a href="#catalogue" className={shared.btnSecondary}>
                <span>Access Library Catalogue</span>
              </a>
            </div>

            <div className={styles.quickJumpWrap}>
              <span className={styles.quickJumpLabel}>Student Quick Access</span>
              <div className={styles.quickJumpLinks}>
                <a
                  href={LIBRARY_CONFIG.catalogue.baseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.quickPill}
                >
                  <span>Mandarin M5 OPAC</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
                <Link href="/online-resources" className={styles.quickPill}>
                  <span>Online Databases</span>
                </Link>
                <a
                  href={LIBRARY_CONFIG.repository.baseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.quickPill}
                >
                  <span>Past Theses &amp; Projects</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
                <a href="#hours" className={styles.quickPill}>
                  <Clock size={12} aria-hidden="true" />
                  <span>Opening Hours</span>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.mediaColumn}>
            <figure className={styles.imageFrame}>
              <Image
                src={heroElibraryImg}
                alt="Godfrey Okoye University Library E-Library equipped with desktop research workstations"
                className={styles.heroImage}
                priority
                placeholder="blur"
                sizes="(max-width: 980px) 100vw, 48vw"
              />
              <figcaption className={styles.imageCaption}>
                <span className={styles.captionAccent}>
                  <span className={styles.captionDot} aria-hidden="true" />
                  In-Session: Mon–Fri 8:15 AM – 9:00 PM
                </span>
                <span>Thinkers Corner, Enugu · GOUNI E-Library</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className={styles.stripWrapper} aria-label="Library core facilities">
          <div className={styles.stripGrid}>
            {HERO_PILLARS.map((pillar, index) => {
              const Icon = PILLAR_ICONS[index];
              return (
                <div key={pillar.title} className={styles.stripItem}>
                  <span className={styles.stripIcon} aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h2 className={styles.stripTitle}>{pillar.title}</h2>
                    <p className={styles.stripDetail}>{pillar.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
