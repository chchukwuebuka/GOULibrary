import type { Metadata } from "next";
import { PolicyDocumentPage } from "@/components/PolicyDocumentPage";

export const metadata: Metadata = {
  title: "Basic Library Rules | Godfrey Okoye University Library",
  description:
    "Official Senate-approved rules governing identification, study conduct, facility care, and borrowing at Godfrey Okoye University Library.",
};

export default function LibraryRulesPage() {
  return <PolicyDocumentPage slug="library-rules" />;
}
