import { LIBRARY_CONFIG } from "./libraryConfig";

export interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

export interface UtilityLink {
  label: string;
  href: string;
  external?: boolean;
}

export const LIBRARY_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/#home", sectionId: "home" },
  { label: "About the Library", href: "/#about", sectionId: "about" },
  { label: "Resources", href: "/#resources", sectionId: "resources" },
  { label: "Library Services", href: "/#services", sectionId: "services" },
  { label: "Access & Membership", href: "/#access", sectionId: "access" },
  { label: "Opening Hours", href: "/#hours", sectionId: "hours" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export const HEADER_UTILITY_LINKS: UtilityLink[] = [
  {
    label: "Online Resources",
    href: LIBRARY_CONFIG.portals.onlineResources,
  },
  {
    label: "Library Policies",
    href: LIBRARY_CONFIG.portals.libraryRules,
  },
  {
    label: "GOUNI Main Website",
    href: LIBRARY_CONFIG.portals.universityWebsite,
    external: true,
  },
  {
    label: "Institutional Repository",
    href: LIBRARY_CONFIG.repository.baseUrl,
    external: true,
  },
  {
    label: "Student ERP Portal",
    href: LIBRARY_CONFIG.portals.studentErp,
    external: true,
  },
];

export interface FooterColumn {
  heading: string;
  links: UtilityLink[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Quick Navigation",
    links: [
      { label: "About Our Library", href: "/#about" },
      { label: "Library Resources", href: "/#resources" },
      { label: "Digital Library Access", href: "/#digital-library" },
      { label: "Library Services", href: "/#services" },
      { label: "Access & Eligibility", href: "/#access" },
      { label: "Opening Hours", href: "/#hours" },
      { label: "Frequently Asked Questions", href: "/#faq" },
    ],
  },
  {
    heading: "Resources & Policies",
    links: [
      {
        label: "Online Resources Directory",
        href: LIBRARY_CONFIG.portals.onlineResources,
      },
      {
        label: "Basic Library Rules",
        href: LIBRARY_CONFIG.portals.libraryRules,
      },
      {
        label: "Circulation Policy",
        href: LIBRARY_CONFIG.portals.circulationPolicy,
      },
      {
        label: "Cataloging Policy",
        href: LIBRARY_CONFIG.portals.catalogingPolicy,
      },
      {
        label: "Collection Development Policy",
        href: LIBRARY_CONFIG.portals.collectionPolicy,
      },
      {
        label: "Digital Media & AV",
        href: LIBRARY_CONFIG.portals.digitalMedia,
      },
      {
        label: "Library Catalogue (M5 OPAC)",
        href: LIBRARY_CONFIG.catalogue.baseUrl,
        external: true,
      },
      {
        label: "GOUNI Main Website",
        href: LIBRARY_CONFIG.portals.universityWebsite,
        external: true,
      },
    ],
  },
];
