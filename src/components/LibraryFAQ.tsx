"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { LIBRARY_FAQS } from "@/data/libraryFAQs";
import shared from "@/styles/shared.module.css";
import styles from "./LibraryFAQ.module.css";

/**
 * Accessible keyboard-navigable FAQ accordion covering membership, borrowing, digital access, and enquiries.
 */
export function LibraryFAQ() {
  const [openId, setOpenId] = useState<string | null>(LIBRARY_FAQS[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faq"
      className={shared.sectionWhite}
      aria-labelledby="faq-heading"
    >
      <div className={shared.container}>
        <ScrollReveal>
        <div className={styles.faqLayout}>
          <div>
            <p className={shared.eyebrow}>Help &amp; Guidance</p>
            <h2 id="faq-heading" className={shared.sectionTitle}>
              Frequently Asked Questions
            </h2>
            <p className={shared.sectionLead}>
              Quick answers to common enquiries about library access,
              circulation rules, off-campus digital resources, and campus
              support.
            </p>

            <div className={styles.faqIntroCard}>
              <h3 className={styles.faqIntroTitle}>Still Need Clarification?</h3>
              <p className={styles.faqIntroCopy}>
                Where institutional updates apply to your faculty or semester
                schedule, our Circulation and Reference staff are ready to
                assist you directly.
              </p>
              <a href="#contact" className={shared.btnSecondary}>
                <span>Contact Library Desk</span>
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className={styles.accordionList}>
            {LIBRARY_FAQS.map((item) => {
              const isOpen = openId === item.id;
              const panelId = `faq-panel-${item.id}`;
              const triggerId = `faq-trigger-${item.id}`;
              return (
                <div key={item.id} className={styles.accordionItem}>
                  <h3>
                    <button
                      id={triggerId}
                      type="button"
                      className={styles.accordionTrigger}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleItem(item.id)}
                    >
                      <span className={styles.questionText}>{item.question}</span>
                      <ChevronDown
                        size={19}
                        className={
                          isOpen
                            ? `${styles.chevronIcon} ${styles.chevronOpen}`
                            : styles.chevronIcon
                        }
                        aria-hidden="true"
                      />
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    hidden={!isOpen}
                    className={
                      isOpen
                        ? `${styles.panelCollapse} ${styles.panelOpen}`
                        : styles.panelCollapse
                    }
                  >
                    <div className={styles.panelInner}>
                      <div className={styles.answerBody}>
                        <p>{item.answer}</p>
                        {item.verificationNote ? (
                          <p className={styles.answerNote}>
                            <strong>Confirmation Note:</strong>{" "}
                            {item.verificationNote}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
