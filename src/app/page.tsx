import { AboutLibrary } from "@/components/AboutLibrary";
import { BackToTop } from "@/components/BackToTop";
import { DigitalLibrary } from "@/components/DigitalLibrary";
import { LibraryAccess } from "@/components/LibraryAccess";
import { LibraryCatalogue } from "@/components/LibraryCatalogue";
import { LibraryContact } from "@/components/LibraryContact";
import { LibraryFAQ } from "@/components/LibraryFAQ";
import { LibraryFooter } from "@/components/LibraryFooter";
import { LibraryHeader } from "@/components/LibraryHeader";
import { LibraryHero } from "@/components/LibraryHero";
import { LibraryLocation } from "@/components/LibraryLocation";
import { LibraryOpeningHours } from "@/components/LibraryOpeningHours";
import { LibraryRegulations } from "@/components/LibraryRegulations";
import { LibraryResources } from "@/components/LibraryResources";
import { LibraryServices } from "@/components/LibraryServices";

/**
 * Godfrey Okoye University Library official digital information portal page.
 */
export default function UniversityLibraryPage() {
  return (
    <>
      <LibraryHeader />
      <main id="main-content">
        <LibraryHero />
        <AboutLibrary />
        <LibraryResources />
        <DigitalLibrary />
        <LibraryCatalogue />
        <LibraryServices />
        <LibraryAccess />
        <LibraryRegulations />
        <LibraryOpeningHours />
        <LibraryLocation />
        <LibraryFAQ />
        <LibraryContact />
      </main>
      <LibraryFooter />
      <BackToTop />
    </>
  );
}
