import { Suspense } from "react";
import type { Metadata } from "next";
import { BackToTop } from "@/components/BackToTop";
import { LibraryFooter } from "@/components/LibraryFooter";
import { LibraryHeader } from "@/components/LibraryHeader";
import { OnlineResourcesDirectory } from "@/components/OnlineResourcesDirectory";

export const metadata: Metadata = {
  title:
    "Online Resources & Databases | Godfrey Okoye University Library",
  description:
    "Explore electronic books, peer-reviewed academic journals, Research4Life databases, GOUNI Open Courseware, and the Institutional Repository.",
};

export default function OnlineResourcesPage() {
  return (
    <>
      <LibraryHeader />
      <main id="main-content">
        <Suspense fallback={<div aria-busy="true">Loading resources directory...</div>}>
          <OnlineResourcesDirectory />
        </Suspense>
      </main>
      <LibraryFooter />
      <BackToTop />
    </>
  );
}
