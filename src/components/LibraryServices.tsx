import {
  BookOpen,
  Compass,
  GraduationCap,
  LampDesk,
  Layers,
  MessageSquare,
  Printer,
  Search,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { VerificationNotice } from "@/components/VerificationNotice";
import { LIBRARY_SERVICES, type ServiceIconKey } from "@/data/libraryContent";
import shared from "@/styles/shared.module.css";
import styles from "./LibraryServices.module.css";

const SERVICE_ICON_MAP: Record<ServiceIconKey, typeof BookOpen> = {
  bookOpen: BookOpen,
  compass: Compass,
  lampDesk: LampDesk,
  printer: Printer,
  graduationCap: GraduationCap,
  search: Search,
  layers: Layers,
  messageSquare: MessageSquare,
};

/**
 * Organized service directory with subtle verification status indicators.
 */
export function LibraryServices() {
  return (
    <section
      id="services"
      className={shared.sectionLight}
      aria-labelledby="services-heading"
    >
      <div className={shared.container}>
        <SectionHeader
          eyebrow="Library Services"
          title="Services Designed to Support Your Academic Journey"
          lead="Dedicated reader services connecting students, academic staff, and researchers with authoritative learning resources."
          titleId="services-heading"
        />

        <div className={styles.servicesGrid}>
          {LIBRARY_SERVICES.map((service) => {
            const Icon = SERVICE_ICON_MAP[service.icon];
            const isVerified = service.verificationStatus === "verified";
            return (
              <article key={service.id} className={styles.serviceCard}>
                <div className={styles.serviceTop}>
                  <span className={styles.serviceIcon} aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <span className={styles.statusTag}>
                    <span
                      className={
                        isVerified
                          ? styles.statusDotVerified
                          : styles.statusDotPending
                      }
                      aria-hidden="true"
                    />
                    <span>{service.verificationLabel}</span>
                  </span>
                </div>

                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>

        <VerificationNotice
          message="Services marked with “Confirm Desk Availability” (such as printing and photocopying) require current on-site verification with library staff before publication. Under Senate Library Rules, Institute projects may not be photocopied."
          className={styles.noticeSpacing}
        />
      </div>
    </section>
  );
}
