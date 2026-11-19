import type { Metadata } from "next";
import { PolicyDocumentPage } from "@/components/PolicyDocumentPage";

export const metadata: Metadata = {
  title: "Circulation Policy | Godfrey Okoye University Library",
  description:
    "Borrowing eligibility, loan durations, reserve items, renewals, and clearance requirements at Godfrey Okoye University Library.",
};

export default function CirculationPolicyPage() {
  return <PolicyDocumentPage slug="circulation-policy" />;
}
