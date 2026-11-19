export const LIBRARY_CONFIG = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://libraries.gouni.edu.ng",
  institutionName: "Godfrey Okoye University",
  libraryName: "Godfrey Okoye University Library",
  motto: "Unity of Knowledge",
  catalogue: {
    providerName: "Mandarin M5 OPAC",
    baseUrl: "https://gouni.mlasolutions.com/",
    directUrl: "https://gouni.mlasolutions.com/m5/catalog/default.aspx?installation=Default",
    supportsDirectQueryParam: false,
    searchGuidance:
      "The official Mandarin M5 OPAC launches a fresh session per visit. Your search keywords are copied for quick pasting once the catalogue opens.",
  },
  repository: {
    name: "GOUNI Institutional Repository (EPrints)",
    baseUrl: "https://eprints.gouni.edu.ng/",
    searchActionUrl: "https://eprints.gouni.edu.ng/cgi/search/simple",
    supportsDirectQueryParam: true,
  },
  portals: {
    universityWebsite: "https://gouni.edu.ng/",
    onlineResources: "/online-resources",
    libraryRules: "/library-rules",
    circulationPolicy: "/circulation-policy",
    catalogingPolicy: "/cataloging-policy",
    collectionPolicy: "/collection-development-policy",
    digitalMedia: "/digital-media",
    libraryHours: "/#hours",
    openCourseware: "https://gouni.edu.ng/open-courseware",
    studentErp: "https://erp.gouni.edu.ng/Security/Accounts/Login",
  },
  contact: {
    librarianName: "Assoc. Prof. Juliana Iwu-James, Ph.D.",
    librarianRole: "University Librarian",
    librarianOffice: "Office of the University Librarian, Main Library, Thinkers Corner Campus",
    libraryDeskPhone: "07069186018",
    libraryDeskTelHref: "tel:+2347069186018",
    universityPhones: ["09134273215", "07061756730", "09121963049"],
    primaryEmail: "info@gouni.edu.ng",
    registrarEmail: "registrar@gouni.edu.ng",
    libraryDirectEmailPlaceholder: "Confirm dedicated library email with ICT / University Librarian",
    campusAddress: "Jideofor Street, Thinkers Corner, Enugu 400001, Enugu State, Nigeria",
    postalBox: "P.M.B. 01014, Enugu, Nigeria",
    buildingLocationNote:
      "Confirm exact library building wing and floor plan with Physical Planning & University Librarian prior to campus signage updates.",
    mapsDirectionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Godfrey+Okoye+University+Thinkers+Corner+Enugu+Nigeria",
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=Godfrey%20Okoye%20University%2C%20Thinkers%20Corner%2C%20Enugu%2C%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  social: {
    facebook: "https://web.facebook.com/gouniversityenugu",
    linkedin: "https://www.linkedin.com/company/godfrey-okoye-university/posts/?feedView=all",
    instagram: "https://www.instagram.com/gouniversity_enugu",
  },
} as const;
