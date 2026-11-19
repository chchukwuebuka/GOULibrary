import Image from "next/image";
import { Building, ExternalLink, MapPin, Navigation, Phone } from "lucide-react";
import campusGroundsImg from "../../public/images/img_2087.png";
import { SectionHeader } from "@/components/SectionHeader";
import { LIBRARY_CONFIG } from "@/data/libraryConfig";
import shared from "@/styles/shared.module.css";
import styles from "./LibraryLocation.module.css";

/**
 * Physical campus address, directions CTA, and Google Maps campus preview.
 */
export function LibraryLocation() {
  return (
    <section
      id="location"
      className={shared.sectionLight}
      aria-labelledby="location-heading"
    >
      <div className={shared.container}>
        <SectionHeader
          eyebrow="Campus Location"
          title="Find Us on Campus"
          lead="Visit the Main Library at Godfrey Okoye University’s Thinkers Corner Campus in Enugu."
          titleId="location-heading"
        />

        <div className={styles.locationGrid}>
          <div className={styles.detailsCard}>
            <div>
              <figure className={styles.campusPhotoWrap}>
                <Image
                  src={campusGroundsImg}
                  alt="Godfrey Okoye University campus buildings and grounds in Enugu"
                  className={styles.campusPhoto}
                  placeholder="blur"
                  sizes="(max-width: 920px) 100vw, 40vw"
                />
                <figcaption className={styles.campusPhotoCaption}>
                  Godfrey Okoye University campus grounds, Enugu.
                </figcaption>
              </figure>

              <div className={styles.infoList}>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon} aria-hidden="true">
                  <MapPin size={19} />
                </span>
                <div>
                  <p className={styles.infoLabel}>Campus Address</p>
                  <p className={styles.infoValue}>
                    {LIBRARY_CONFIG.libraryName}
                    <br />
                    {LIBRARY_CONFIG.contact.campusAddress}
                  </p>
                  <p className={styles.infoSubtle}>
                    Postal Box: {LIBRARY_CONFIG.contact.postalBox}
                  </p>
                </div>
              </div>

              <div className={styles.infoRow}>
                <span className={styles.infoIcon} aria-hidden="true">
                  <Building size={19} />
                </span>
                <div>
                  <p className={styles.infoLabel}>Building &amp; Wing</p>
                  <p className={styles.infoValue}>
                    Main University Library (Thinkers Corner Campus)
                  </p>
                  <p className={styles.infoSubtle}>
                    {LIBRARY_CONFIG.contact.buildingLocationNote}
                  </p>
                </div>
              </div>

              <div className={styles.infoRow}>
                <span className={styles.infoIcon} aria-hidden="true">
                  <Phone size={19} />
                </span>
                <div>
                  <p className={styles.infoLabel}>Library &amp; Campus Enquiries</p>
                  <p className={styles.infoValue}>
                    Library Desk: {LIBRARY_CONFIG.contact.libraryDeskPhone}
                  </p>
                  <p className={styles.infoSubtle}>
                    University Switchboard:{" "}
                    {LIBRARY_CONFIG.contact.universityPhones.join(" · ")}
                  </p>
                </div>
              </div>
              </div>
            </div>

            <div className={styles.actionsWrap}>
              <a
                href={LIBRARY_CONFIG.contact.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={shared.btnPrimary}
              >
                <Navigation size={16} aria-hidden="true" />
                <span>Get Directions</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className={styles.mapCard}>
            <iframe
              title="Map showing Godfrey Okoye University Thinkers Corner Campus in Enugu"
              src={LIBRARY_CONFIG.contact.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapFrame}
            />
            <div className={styles.mapCaption}>
              <span>Thinkers Corner Campus, Enugu, Nigeria</span>
              <span>Exact library coordinates pending confirmation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
