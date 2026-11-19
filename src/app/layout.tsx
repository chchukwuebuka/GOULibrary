import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import { LIBRARY_CONFIG } from "@/data/libraryConfig";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(LIBRARY_CONFIG.siteUrl),
  title: "Godfrey Okoye University Library | Knowledge, Research & Learning",
  description:
    "Explore the Godfrey Okoye University Library. Discover academic resources, digital collections, library services, access information and research support.",
  keywords: [
    "Godfrey Okoye University Library",
    "GOUNI Library",
    "GOUNI OPAC Catalogue",
    "GOUNI Institutional Repository",
    "Enugu University Library",
    "Academic Research Support",
  ],
  icons: {
    icon: "/images/gou-crest.jpg",
    apple: "/images/gou-crest.jpg",
  },
  openGraph: {
    title: "Godfrey Okoye University Library | Knowledge, Research & Learning",
    description:
      "Official digital information portal for Godfrey Okoye University Library, Enugu — academic collections, Mandarin M5 catalogue access, institutional repository, and study support.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${sourceSerif4.variable}`}
    >
      <body>
        <a href="#main-content" className="skipLink">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
