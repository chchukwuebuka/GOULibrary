import Link from "next/link";
import { ArrowLeft, BookOpen, Search } from "lucide-react";
import { LibraryFooter } from "@/components/LibraryFooter";
import { LibraryHeader } from "@/components/LibraryHeader";
import shared from "@/styles/shared.module.css";
import styles from "./not-found.module.css";

/**
 * Branded 404 recovery page preserving Godfrey Okoye University Library navigation.
 */
export default function NotFound() {
  return (
    <>
      <LibraryHeader />
      <main id="main-content" className={styles.notFoundSection}>
        <div className={shared.container}>
          <div className={styles.notFoundCard}>
            <span className={styles.statusBadge}>404 · Page Not Found</span>
            <h1 className={styles.title}>
              We Couldn&apos;t Locate That Library Page
            </h1>
            <p className={styles.message}>
              The requested address may have been moved or updated as part of
              the Godfrey Okoye University Library digital portal. Use the links
              below to return to the library home, search the catalogue, or
              browse online resources.
            </p>
            <div className={styles.actions}>
              <Link href="/" className={shared.btnPrimary}>
                <ArrowLeft size={16} aria-hidden="true" />
                <span>Return to Library Home</span>
              </Link>
              <Link href="/online-resources" className={shared.btnSecondary}>
                <BookOpen size={16} aria-hidden="true" />
                <span>Online Resources</span>
              </Link>
              <Link href="/#catalogue" className={shared.btnSecondary}>
                <Search size={16} aria-hidden="true" />
                <span>Library Catalogue</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <LibraryFooter />
    </>
  );
}
