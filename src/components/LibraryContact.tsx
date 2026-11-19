import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone, UserCheck } from "lucide-react";
import { ScrollReveal, type RevealDelayStep } from "@/components/ScrollReveal";
import { SectionHeader } from "@/components/SectionHeader";
import { VerificationNotice } from "@/components/VerificationNotice";
import { LIBRARY_CONFIG } from "@/data/libraryConfig";
import shared from "@/styles/shared.module.css";
import styles from "./LibraryContact.module.css";

/**
 * Contact section presenting the University Librarian's office, library desk telephone, and official university email channels.
 */
export function LibraryContact() {
  return (
    <section
      id="contact"
      className={shared.sectionLight}
      aria-labelledby="contact-heading"
    >
      <div className={shared.container}>
        <SectionHeader
          eyebrow="Contact & Support"
          title="Need Assistance? We're Here to Help."
          lead="Reach the University Library Desk or the Office of the University Librarian for research assistance, resource enquiries, or membership verification."
          titleId="contact-heading"
        />

        <div className={styles.contactGrid}>
          <ScrollReveal delayStep={0 as RevealDelayStep} stretch>
          <article className={styles.contactCard}>
            <span className={styles.contactIcon} aria-hidden="true">
              <UserCheck size={20} />
            </span>
            <p className={styles.contactLabel}>University Librarian</p>
            <h3 className={styles.contactHeading}>
              {LIBRARY_CONFIG.contact.librarianName}
            </h3>
            <p className={styles.contactLine}>
              {LIBRARY_CONFIG.contact.librarianOffice}
            </p>
          </article>
          </ScrollReveal>

          <ScrollReveal delayStep={1 as RevealDelayStep} stretch>
          <article className={styles.contactCard}>
            <span className={styles.contactIcon} aria-hidden="true">
              <Phone size={20} />
            </span>
            <p className={styles.contactLabel}>Telephone &amp; Email</p>
            <h3 className={styles.contactHeading}>Direct Desk &amp; Registry</h3>
            <p className={styles.contactLine}>
              Library Desk:{" "}
              <a
                href={LIBRARY_CONFIG.contact.libraryDeskTelHref}
                className={styles.contactLink}
              >
                {LIBRARY_CONFIG.contact.libraryDeskPhone}
              </a>
            </p>
            <p className={styles.contactLine}>
              Enquiries:{" "}
              <a
                href={`mailto:${LIBRARY_CONFIG.contact.primaryEmail}`}
                className={styles.contactLink}
              >
                {LIBRARY_CONFIG.contact.primaryEmail}
              </a>{" "}
              ·{" "}
              <a
                href={`mailto:${LIBRARY_CONFIG.contact.registrarEmail}`}
                className={styles.contactLink}
              >
                {LIBRARY_CONFIG.contact.registrarEmail}
              </a>
            </p>
          </article>
          </ScrollReveal>

          <ScrollReveal delayStep={2 as RevealDelayStep} stretch>
          <article className={styles.contactCard}>
            <span className={styles.contactIcon} aria-hidden="true">
              <MapPin size={20} />
            </span>
            <p className={styles.contactLabel}>Physical &amp; Postal Address</p>
            <h3 className={styles.contactHeading}>
              {LIBRARY_CONFIG.libraryName}
            </h3>
            <p className={styles.contactLine}>
              {LIBRARY_CONFIG.contact.campusAddress}
            </p>
            <p className={styles.contactLine}>
              {LIBRARY_CONFIG.contact.postalBox}
            </p>
          </article>
          </ScrollReveal>
        </div>

        <div className={styles.actionPanel}>
          <div>
            <h3 className={styles.actionCopyTitle}>
              Send an Official Library Enquiry
            </h3>
            <p className={styles.actionCopyText}>
              Contact university enquiries directly or review library rules,
              borrowing policies, and online resource access instructions.
            </p>
          </div>

          <div className={styles.actionButtons}>
            <a
              href={`mailto:${LIBRARY_CONFIG.contact.primaryEmail}?subject=Godfrey%20Okoye%20University%20Library%20Enquiry`}
              className={shared.btnGold}
            >
              <Mail size={16} aria-hidden="true" />
              <span>Email University Enquiries</span>
            </a>

            <a
              href={LIBRARY_CONFIG.contact.libraryDeskTelHref}
              className={shared.btnSecondary}
            >
              <Phone size={16} aria-hidden="true" />
              <span>Call Library Desk</span>
            </a>

            <Link
              href={LIBRARY_CONFIG.portals.libraryRules}
              className={shared.btnSecondary}
            >
              <span>Library Policies &amp; Rules</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <VerificationNotice
          message={`Email links currently route to verified university channels (${LIBRARY_CONFIG.contact.primaryEmail} and ${LIBRARY_CONFIG.contact.registrarEmail}). ${LIBRARY_CONFIG.contact.libraryDirectEmailPlaceholder}.`}
          className={styles.noticeMargin}
        />
      </div>
    </section>
  );
}
