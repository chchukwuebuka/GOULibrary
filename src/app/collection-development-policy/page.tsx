import type { Metadata } from "next";
import { PolicyDocumentPage } from "@/components/PolicyDocumentPage";

export const metadata: Metadata = {
  title: "Collection Development Policy | Godfrey Okoye University Library",
  description:
    "Acquisition priorities, curriculum alignment, selection criteria, University Archives preservation, and gift guidelines at Godfrey Okoye University Library.",
};

export default function CollectionDevelopmentPolicyPage() {
  return <PolicyDocumentPage slug="collection-development-policy" />;
}
