import type { Metadata } from "next";
import { PolicyDocumentPage } from "@/components/PolicyDocumentPage";

export const metadata: Metadata = {
  title: "Cataloging Policy | Godfrey Okoye University Library",
  description:
    "Bibliographic organisation standards including MARC 21, AACR2R, and Library of Congress classification at Godfrey Okoye University Library.",
};

export default function CatalogingPolicyPage() {
  return <PolicyDocumentPage slug="cataloging-policy" />;
}
