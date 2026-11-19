import type { Metadata } from "next";
import { PolicyDocumentPage } from "@/components/PolicyDocumentPage";

export const metadata: Metadata = {
  title: "Digital Media & Audiovisual Reserve | Godfrey Okoye University Library",
  description:
    "Guidelines for accessing CDs, DVDs, optical workstations, and reserve headphone sets inside Godfrey Okoye University Library.",
};

export default function DigitalMediaPage() {
  return <PolicyDocumentPage slug="digital-media" />;
}
