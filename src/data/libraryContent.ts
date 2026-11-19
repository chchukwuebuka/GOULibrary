import { LIBRARY_CONFIG } from "./libraryConfig";

export type ResourceIconKey =
  | "book"
  | "tablet"
  | "journal"
  | "database"
  | "archive"
  | "bookmark";

export interface ResourceCategory {
  id: string;
  title: string;
  icon: ResourceIconKey;
  description: string;
  highlights: string[];
  actionLabel?: string;
  actionHref?: string;
  external?: boolean;
}

export const HERO_PILLARS = [
  {
    title: "Physical Library",
    detail: "Catalogued print stacks, reference collections & quiet reading rooms",
  },
  {
    title: "Digital Resources",
    detail: "Online academic databases, open courseware & GOUNI Repository",
  },
  {
    title: "Research Support",
    detail: "Information literacy guidance & bibliographic consultation",
  },
  {
    title: "Student Reading Spaces",
    detail: "Dedicated silent study tables & structured academic environment",
  },
] as const;

export const ABOUT_CONTENT = {
  eyebrow: "About Our Library",
  heading: "Supporting Knowledge, Learning and Research.",
  introParagraphs: [
    "The Godfrey Okoye University Library serves as the intellectual heart of the university, supporting teaching, learning, independent study, and evidence-based research across all faculties and academic programmes.",
    "Guided by Godfrey Okoye University’s motto — Unity of Knowledge — and its Catholic and ecumenical commitment to dialogic education, the library acquires, organises, and preserves information resources in print, digital, and archival formats to Library of Congress and MARC 21 international standards.",
  ],
  vision:
    "To provide to the students and staff of Godfrey Okoye University all the resources and services required to support evidence-based research and education leading to informed religious, cultural, and epistemological dialogue.",
  mission:
    "The Library leads the Godfrey Okoye University community in identifying, locating, evaluating, and gaining access to the full range of information sources available. It supports the academic programme of the University through the development of information-literate students and the promotion of research by students and academic staff, while collecting, organising, and maintaining print, non-print, and archival materials including the University Archives.",
  objectives: [
    "Support curriculum preparation and course assignments through structured textbook and reference collections.",
    "Develop information-literate students skilled in locating, evaluating, and citing scholarly literature.",
    "Provide access to subscribed and open-access e-journals, databases, and the GOUNI Institutional Repository.",
    "Preserve institutional publications, theses, and special collections within the University Archives.",
  ],
  librarianMessageStatus:
    "Official welcome statement from the University Librarian and comprehensive library history timeline are marked for institutional verification before final publication.",
};

export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  {
    id: "physical-books",
    title: "Physical Book Collections",
    icon: "book",
    description:
      "Core academic textbooks, course reserve titles, subject-specific monographs, and general reading books classified under the Library of Congress scheme.",
    highlights: [
      "Academic textbooks",
      "Course reserve materials",
      "Subject-specific collections",
      "General reading materials",
    ],
    actionLabel: "View Collection & Cataloging Policy",
    actionHref: LIBRARY_CONFIG.portals.collectionPolicy,
  },
  {
    id: "electronic-books",
    title: "Electronic Books",
    icon: "tablet",
    description:
      "Digital books, open educational monographs, and electronic study materials curated through approved university resource portals.",
    highlights: [
      "African Digital Library & Project Gutenberg",
      "Open Humanities Press & Google Books",
      "SpringerOpen monographs",
    ],
    actionLabel: "Browse Electronic Books",
    actionHref: "/online-resources?category=ebooks",
  },
  {
    id: "academic-journals",
    title: "Academic Journals",
    icon: "journal",
    description:
      "Peer-reviewed periodicals and scholarly journal platforms spanning African, international, humanities, sciences, and medical literature.",
    highlights: [
      "African Journals Online (AJOL)",
      "Directory of Open Access Journals (DOAJ)",
      "PubMed & PubMed Central periodicals",
    ],
    actionLabel: "Browse Academic Journals",
    actionHref: "/online-resources?category=journals",
  },
  {
    id: "research-databases",
    title: "Research Databases",
    icon: "database",
    description:
      "Multidisciplinary scholarly databases including Research4Life programmes (AGORA, ARDI, HINARI, OARE), JSTOR, ERIC, and ProQuest collections.",
    highlights: [
      "Research4Life & JSTOR portals",
      "NUC Nigerian Virtual Library & ERIC",
      "Access credentials via Library Desk",
    ],
    actionLabel: "Explore Research Databases",
    actionHref: "/online-resources?category=databases",
  },
  {
    id: "institutional-repository",
    title: "Institutional Repository",
    icon: "archive",
    description:
      "The open-access GOUNI Repository archiving research articles, university journals, staff publications, theses, and approved project materials.",
    highlights: [
      "Faculty research outputs",
      "Theses & project materials",
      "Open Courseware & OPAC links",
    ],
    actionLabel: "Explore Repository & Archives",
    actionHref: "/online-resources?category=repository",
  },
  {
    id: "reference-materials",
    title: "Reference & Archival Media",
    icon: "bookmark",
    description:
      "Encyclopedias, specialised academic dictionaries, closed-stack University Archives, and in-library reserve CD/DVD audiovisual resources.",
    highlights: [
      "Encyclopedias & dictionaries",
      "University Archives (in-library)",
      "Reserve CD/DVD study media",
    ],
    actionLabel: "View Digital Media & Reference Guide",
    actionHref: LIBRARY_CONFIG.portals.digitalMedia,
  },
];

export interface DigitalAudienceTier {
  id: string;
  audience: string;
  summary: string;
  points: string[];
}

export const DIGITAL_AUDIENCE_TIERS: DigitalAudienceTier[] = [
  {
    id: "students",
    audience: "Students",
    summary:
      "Use open-access digital collections anywhere and obtain approved institutional database login guidance from the Library.",
    points: [
      "Search the GOUNI Institutional Repository (eprints.gouni.edu.ng) freely off-campus.",
      "Obtain current Research4Life / subscribed database access tokens directly from library personnel where required.",
      "Use library workstations equipped for academic research and digital media viewing.",
      "Follow posted portal access instructions when switching between Research4Life platforms.",
    ],
  },
  {
    id: "academic-staff",
    audience: "Academic Staff",
    summary:
      "Explore peer-reviewed journals, subject databases, and open courseware to support lecturing and scholarly publication.",
    points: [
      "Access curated research portals across arts, sciences, law, management, and health fields.",
      "Submit faculty research outputs and scholarly works to the GOUNI Repository.",
      "Recommend curriculum titles and digital materials for library acquisition.",
    ],
  },
  {
    id: "visitors",
    audience: "Researchers & Visitors",
    summary:
      "Discover openly licensed GOUNI scholarship online or request supervised physical access to restricted collections.",
    points: [
      "Browse open-access publications in the GOUNI Repository and public partner indexes.",
      "Present a formal letter of introduction from your home institution for on-campus consultation.",
      "Contact the Reference Desk to enquire about permitted access to archival or restricted items.",
    ],
  },
];

export type ServiceIconKey =
  | "bookOpen"
  | "compass"
  | "lampDesk"
  | "printer"
  | "graduationCap"
  | "search"
  | "layers"
  | "messageSquare";

export interface LibraryServiceItem {
  id: string;
  title: string;
  icon: ServiceIconKey;
  description: string;
  verificationStatus: "verified" | "pending";
  verificationLabel: string;
}

export const LIBRARY_SERVICES: LibraryServiceItem[] = [
  {
    id: "lending",
    title: "Book Lending & Borrowing",
    icon: "bookOpen",
    description:
      "Circulation of general books to eligible GOU and IECE students and staff, alongside 3-hour in-library reserve loans.",
    verificationStatus: "verified",
    verificationLabel: "Senate Policy",
  },
  {
    id: "reference",
    title: "Reference & Research Assistance",
    icon: "compass",
    description:
      "One-on-one help from librarians to identify authoritative reference works, journals, and subject literature.",
    verificationStatus: "verified",
    verificationLabel: "Core Mandate",
  },
  {
    id: "reading-spaces",
    title: "Reading & Study Spaces",
    icon: "lampDesk",
    description:
      "Calm, quiet, well-ordered reading rooms designed for individual academic study and examination preparation.",
    verificationStatus: "verified",
    verificationLabel: "Campus Facility",
  },
  {
    id: "printing",
    title: "Printing & Photocopying",
    icon: "printer",
    description:
      "Reprographic support subject to copyright compliance and Senate rules (note: Institute projects may not be photocopied).",
    verificationStatus: "pending",
    verificationLabel: "Confirm Desk Availability",
  },
  {
    id: "information-literacy",
    title: "Information Literacy Support",
    icon: "graduationCap",
    description:
      "Structured orientation and instruction on catalogue navigation, source evaluation, and effective database search.",
    verificationStatus: "verified",
    verificationLabel: "Core Mandate",
  },
  {
    id: "research-guidance",
    title: "Research Guidance",
    icon: "search",
    description:
      "Advisory support for undergraduate projects, postgraduate theses, and academic staff research workflows.",
    verificationStatus: "verified",
    verificationLabel: "Core Mandate",
  },
  {
    id: "academic-materials",
    title: "Access to Academic Materials",
    icon: "layers",
    description:
      "Access to print stacks, non-circulating periodicals, closed-stack University Archives, and reserve CD/DVD media stations.",
    verificationStatus: "verified",
    verificationLabel: "Library Holdings",
  },
  {
    id: "enquiries",
    title: "General Library Enquiries",
    icon: "messageSquare",
    description:
      "Front-desk and telephone guidance on library registration, opening times, clearance obligations, and access credentials.",
    verificationStatus: "verified",
    verificationLabel: "Desk Support",
  },
];

export interface AccessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export const ACCESS_STEPS: AccessStep[] = [
  {
    stepNumber: "01",
    title: "Confirm Eligibility",
    description:
      "Verify your status as a matriculated GOU or IECE student, university staff member, or approved external visitor.",
  },
  {
    stepNumber: "02",
    title: "Complete Registration",
    description:
      "Complete library registration at the Circulation Desk where required for active borrowing privileges.",
  },
  {
    stepNumber: "03",
    title: "Present Library Identification",
    description:
      "Present a valid GOU or IECE ID card — or an official home-institution letter of introduction for visiting scholars.",
  },
  {
    stepNumber: "04",
    title: "Explore Available Resources",
    description:
      "Deposit personal bags at the designated rack before entering reading halls, stacks, or e-library stations.",
  },
  {
    stepNumber: "05",
    title: "Request Assistance",
    description:
      "Consult library staff at the Reference or Circulation Desk for borrowing, renewals, or database login tokens.",
  },
];

export interface UserCategoryGuide {
  id: string;
  role: string;
  summary: string;
  requirements: string[];
}

export const USER_CATEGORY_GUIDES: UserCategoryGuide[] = [
  {
    id: "undergraduate",
    role: "Undergraduate Students",
    summary: "Full reading hall access and standard 1-week borrowing privileges for general circulating books.",
    requirements: [
      "Valid Godfrey Okoye University (or IECE) student ID required at entry and checkout.",
      "General books circulate for 1 week (renewable twice if unrequested); Reserve items for 3 hours in-library.",
      "All library obligations must be cleared prior to University graduation clearance.",
    ],
  },
  {
    id: "postgraduate",
    role: "Postgraduate Students",
    summary: "Research consultation, repository access, and general circulation privileges (confirm PG borrowing limits).",
    requirements: [
      "Valid GOU or IECE postgraduate identification required for admission and borrowing.",
      "Access to print stacks, e-resources, and supervised closed-stack archival/thesis collections.",
      "Confirm updated postgraduate borrowing limits and registration steps with the University Librarian.",
    ],
  },
  {
    id: "academic-staff",
    role: "Academic Staff",
    summary: "Circulation privileges, research guidance, and faculty collaboration on curriculum acquisitions.",
    requirements: [
      "Valid GOU or IECE academic staff identification required before borrowing.",
      "May initiate book and database acquisition requests to support teaching and departmental research.",
      "Subject to Senate circulation guidelines; confirm extended faculty loan terms with the University Librarian.",
    ],
  },
  {
    id: "administrative-staff",
    role: "Administrative Staff",
    summary: "Library reading room access and general circulation privileges across non-teaching university units.",
    requirements: [
      "Valid university administrative staff ID required prior to checkout.",
      "General circulating books issued under standard 1-week circulation terms.",
      "Obligations must be fulfilled for staff clearance.",
    ],
  },
  {
    id: "visitors",
    role: "External Visitors & Researchers",
    summary: "In-library consultation access granted on formal institutional introduction.",
    requirements: [
      "Must present a valid letter of introduction from the library of their home institution.",
      "Materials are consulted strictly within the Library; outside borrowing is not permitted.",
      "Special access or archival requests require approval from the University Librarian.",
    ],
  },
];

export interface RegulationCategory {
  id: string;
  title: string;
  rules: string[];
}

export const REGULATION_CATEGORIES: RegulationCategory[] = [
  {
    id: "conduct",
    title: "General Conduct",
    rules: [
      "Present your valid GOU/IECE ID or home-institution letter of introduction upon entry.",
      "Maintain a quiet, calm, and neat atmosphere conducive to studying; no “colonisation” of seats.",
      "Switch mobile phones off or to silent mode; no telephone conversations inside the Library.",
      "Leave all personal bags and personal books on the designated table before entering reading spaces.",
      "Leave the Library promptly during prayers, break periods, and closing announcements.",
    ],
  },
  {
    id: "borrowing",
    title: "Borrowing Guidelines",
    rules: [
      "General circulating books are loaned for 1 week and may be renewed up to 2 times if unrequested.",
      "Reserve items, reference books, periodicals, and CD/DVDs do not leave the Library (3-hour reserve loan).",
      "Institute projects may not be borrowed outside or photocopied.",
      "Point out any existing damage on a book at checkout so staff note it; borrowers remain accountable for unrecorded damage.",
      "All obligations to the Library must be fulfilled to obtain University clearance.",
    ],
  },
  {
    id: "facilities",
    title: "Facility Guidelines",
    rules: [
      "No food or drink is permitted inside the Library.",
      "Handle all library books, equipment, and computer workstations with care.",
      "Readers are responsible for repair or replacement costs arising from negligent or intentional damage.",
      "No notices or posters may be mounted in the Library without the University Librarian’s permission.",
    ],
  },
  {
    id: "digital",
    title: "Digital Access",
    rules: [
      "Respect publisher copyright and institutional licensing agreements when downloading scholarly articles.",
      "Do not share restricted university or Research4Life database credentials outside authorised users.",
      "Use e-library computers and reserve audiovisual media solely for legitimate academic and research activities.",
      "Clear browser cache when switching between Research4Life databases as instructed on the portal.",
    ],
  },
];

export interface OpeningHourRow {
  day: string;
  sessionHours: string;
  vacationHours: string;
  status: "Open" | "Closed";
}

export const OPENING_HOURS_ROWS: OpeningHourRow[] = [
  { day: "Monday", sessionHours: "8:15 AM – 9:00 PM", vacationHours: "8:15 AM – 4:00 PM", status: "Open" },
  { day: "Tuesday", sessionHours: "8:15 AM – 9:00 PM", vacationHours: "8:15 AM – 4:00 PM", status: "Open" },
  { day: "Wednesday", sessionHours: "8:15 AM – 9:00 PM", vacationHours: "8:15 AM – 4:00 PM", status: "Open" },
  { day: "Thursday", sessionHours: "8:15 AM – 9:00 PM", vacationHours: "8:15 AM – 4:00 PM", status: "Open" },
  { day: "Friday", sessionHours: "8:15 AM – 9:00 PM", vacationHours: "8:15 AM – 4:00 PM", status: "Open" },
  { day: "Saturday", sessionHours: "10:00 AM – 6:00 PM", vacationHours: "Closed", status: "Open" },
  { day: "Sunday", sessionHours: "1:00 PM – 9:00 PM", vacationHours: "Closed", status: "Open" },
];

export const OPENING_HOUR_NOTICES = [
  {
    title: "Public Holidays & Work-Free Days",
    detail:
      "The Library is closed on statutory Nigerian public holidays and university-declared work-free days.",
  },
  {
    title: "Special University Occasions",
    detail:
      "The Library closes for major university ceremonies such as Commencement; special closing notices are posted at the library entrance.",
  },
  {
    title: "Examination Periods & Daily Confirmation",
    detail:
      "Any extended examination-period schedule adjustments are announced per semester. Confirm daily opening hours directly on 07069186018.",
  },
];
