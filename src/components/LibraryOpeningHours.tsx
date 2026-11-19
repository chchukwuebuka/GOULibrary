import { Clock, Phone } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { LIBRARY_CONFIG } from "@/data/libraryConfig";
import {
  OPENING_HOUR_NOTICES,
  OPENING_HOURS_ROWS,
} from "@/data/libraryContent";
import shared from "@/styles/shared.module.css";
import styles from "./LibraryOpeningHours.module.css";

/**
 * Weekly schedule showing academic-session and out-of-session operating hours from libraries.gouni.edu.ng.
 */
export function LibraryOpeningHours() {
  return (
    <section
      id="hours"
      className={shared.sectionWhite}
      aria-labelledby="hours-heading"
    >
      <div className={shared.container}>
        <SectionHeader
          eyebrow="Operating Schedule"
          title="When You Can Visit Us"
          lead="Published library opening hours during active academic sessions and out-of-session university breaks."
          titleId="hours-heading"
        />

        <div className={styles.hoursGrid}>
          <div className={styles.scheduleCard}>
            <div className={styles.tableHeaderBar}>
              <div className={styles.tableTitleWrap}>
                <Clock
                  size={19}
                  className={styles.tableTitleIcon}
                  aria-hidden="true"
                />
                <h3 className={styles.tableTitle}>Weekly Library Timetable</h3>
              </div>
              <span className={shared.badgeVerified}>
                Official Portal Schedule
              </span>
            </div>

            <div className={styles.tableScroll}>
              <table className={styles.scheduleTable}>
                <thead>
                  <tr>
                    <th scope="col">Day</th>
                    <th scope="col">University In Session</th>
                    <th scope="col">Out of Session / Break</th>
                  </tr>
                </thead>
                <tbody>
                  {OPENING_HOURS_ROWS.map((row) => (
                    <tr key={row.day}>
                      <td className={styles.dayCell}>{row.day}</td>
                      <td className={styles.sessionCell}>{row.sessionHours}</td>
                      <td
                        className={
                          row.vacationHours === "Closed"
                            ? styles.closedText
                            : styles.vacationCell
                        }
                      >
                        {row.vacationHours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.noticesPanel}>
            {OPENING_HOUR_NOTICES.map((notice) => (
              <article key={notice.title} className={styles.noticeCard}>
                <h3 className={styles.noticeTitle}>{notice.title}</h3>
                <p className={styles.noticeText}>{notice.detail}</p>
              </article>
            ))}

            <div className={styles.confirmBox}>
              <h3 className={styles.confirmTitle}>
                Confirm Current Operating Hours
              </h3>
              <p className={styles.confirmCopy}>
                For same-day verification on holidays, exam weeks, or special
                university events, contact the Library Desk directly.
              </p>
              <a
                href={LIBRARY_CONFIG.contact.libraryDeskTelHref}
                className={styles.confirmPhone}
              >
                <Phone size={15} aria-hidden="true" />
                <span>Call {LIBRARY_CONFIG.contact.libraryDeskPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
