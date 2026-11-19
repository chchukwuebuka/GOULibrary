import { LIBRARY_CONFIG } from "./libraryConfig";

export type OnlineResourceCategory =
  | "ebooks"
  | "journals"
  | "databases"
  | "open-courseware"
  | "repository";

export type ResourceAccessType =
  | "open"
  | "registration-free"
  | "librarian-assisted";

export interface OnlineResourceItem {
  id: string;
  title: string;
  category: OnlineResourceCategory;
  accessType: ResourceAccessType;
  description: string;
  accessInstruction: string;
  url?: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
  subjectArea: string;
}

export const ONLINE_RESOURCE_CATEGORIES: {
  id: "all" | OnlineResourceCategory;
  label: string;
}[] = [
  { id: "all", label: "All Resources" },
  { id: "ebooks", label: "Electronic Books" },
  { id: "journals", label: "Academic Journals" },
  { id: "databases", label: "Research Databases" },
  { id: "repository", label: "GOUNI Repository & Archives" },
  { id: "open-courseware", label: "Open Courseware & Data" },
];

export const ONLINE_RESOURCES_LIST: OnlineResourceItem[] = [
  {
    id: "gouni-repository",
    title: "GOUNI Institutional Repository (EPrints)",
    category: "repository",
    accessType: "open",
    subjectArea: "Institutional Scholarship",
    description:
      "Godfrey Okoye University’s open-access digital archive housing faculty publications, university journals, theses, and approved academic project materials.",
    accessInstruction: "Open access globally — browse by subject, author, year, or division.",
    url: LIBRARY_CONFIG.repository.baseUrl,
  },
  {
    id: "gouni-open-courseware",
    title: "GOUNI Open Courseware",
    category: "open-courseware",
    accessType: "open",
    subjectArea: "University Teaching Materials",
    description:
      "Curated university lecture materials, syllabi, and open courseware supporting student study and curriculum development.",
    accessInstruction: "Openly accessible via the main university website.",
    url: LIBRARY_CONFIG.portals.openCourseware,
  },
  {
    id: "mandarin-opac",
    title: "University Library Catalogue (Mandarin M5 OPAC)",
    category: "repository",
    accessType: "open",
    subjectArea: "Library Holdings Discovery",
    description:
      "Live bibliographic catalogue for locating print textbooks, reference volumes, periodicals, and reserve holdings held in the University Library.",
    accessInstruction: "Open access — starts a live OPAC session in a new tab.",
    url: LIBRARY_CONFIG.catalogue.baseUrl,
  },
  {
    id: "african-digital-library",
    title: "African Digital Library",
    category: "ebooks",
    accessType: "registration-free",
    subjectArea: "Multidisciplinary E-Books",
    description:
      "A public digital library offering over 8,000 electronic books free to readers across Africa.",
    accessInstruction: "Free online user registration required on the portal.",
    url: "http://www.africaeducation.org/adl/Default.htm",
  },
  {
    id: "project-gutenberg",
    title: "Project Gutenberg",
    category: "ebooks",
    accessType: "open",
    subjectArea: "Literature & Humanities E-Books",
    description:
      "Over 40,000 public-domain electronic books available to read online or download in standard formats.",
    accessInstruction: "Open access — no login required.",
    url: "https://www.gutenberg.org/",
  },
  {
    id: "google-books",
    title: "Google Books",
    category: "ebooks",
    accessType: "open",
    subjectArea: "General Academic & Reference Books",
    description:
      "A broad searchable index of academic and reference e-books offering full-text public domain books and publisher previews.",
    accessInstruction: "Open access online.",
    url: "https://books.google.com.ng/",
  },
  {
    id: "open-humanities-press",
    title: "Open Humanities Press",
    category: "ebooks",
    accessType: "open",
    subjectArea: "Humanities & Critical Theory",
    description:
      "Peer-reviewed open-access scholarly books and journals in the humanities made freely available upon publication.",
    accessInstruction: "Open access — no registration required.",
    url: "http://openhumanitiespress.org/index.html",
  },
  {
    id: "springer-open",
    title: "SpringerOpen Portfolio",
    category: "ebooks",
    accessType: "open",
    subjectArea: "Science, Technology & Medicine",
    description:
      "Open-access books and peer-reviewed scientific journals published under Springer’s open research portfolio.",
    accessInstruction: "Open access online.",
    url: "https://www.springeropen.com/",
  },
  {
    id: "freebooks",
    title: "Freebooks.com",
    category: "ebooks",
    accessType: "open",
    subjectArea: "General Reading",
    description:
      "Collection of freely downloadable general and cultural e-books.",
    accessInstruction: "Open access online.",
    url: "http://www.freebooks.com/",
  },
  {
    id: "ajol",
    title: "African Journals Online (AJOL)",
    category: "journals",
    accessType: "registration-free",
    subjectArea: "African Peer-Reviewed Journals",
    description:
      "Collection of over 430 peer-reviewed scholarly journals published across Africa covering sciences, humanities, social sciences, and health.",
    accessInstruction: "Free online registration recommended for full article access.",
    url: "https://www.ajol.info/",
  },
  {
    id: "doaj",
    title: "Directory of Open Access Journals (DOAJ)",
    category: "journals",
    accessType: "open",
    subjectArea: "Multidisciplinary Open Journals",
    description:
      "Global directory indexing peer-reviewed open-access journals across all academic disciplines.",
    accessInstruction: "Open access — verify journal quality and peer-review status with faculty.",
    url: "https://doaj.org/",
  },
  {
    id: "pubmed",
    title: "PubMed",
    category: "journals",
    accessType: "open",
    subjectArea: "Medicine & Life Sciences",
    description:
      "U.S. National Library of Medicine index of biomedical citations, abstracts, and links to life-science publications.",
    accessInstruction: "Open access search portal.",
    url: "https://pubmed.ncbi.nlm.nih.gov/",
  },
  {
    id: "pubmed-central",
    title: "PubMed Central (PMC)",
    category: "journals",
    accessType: "open",
    subjectArea: "Full-Text Biomedical Journals",
    description:
      "Free full-text archive of biomedical and life-sciences journal literature maintained by the U.S. National Institutes of Health.",
    accessInstruction: "Open access full-text articles.",
    url: "https://pmc.ncbi.nlm.nih.gov/",
  },
  {
    id: "gateway-free-ejournals",
    title: "Gateway for Free E-Journals",
    category: "journals",
    accessType: "open",
    subjectArea: "Multidisciplinary Journals",
    description:
      "Curated gateway pointing to over 700 free scholarly e-journals across academic disciplines.",
    accessInstruction: "Open access directory (confirm link availability per journal).",
    url: "http://www.icast.org.in/ejournal/ejournal.php",
  },
  {
    id: "omics-open-journals",
    title: "OMICS Open Access Journals",
    category: "journals",
    accessType: "open",
    subjectArea: "Science & Engineering",
    description:
      "Collection of open-access scientific journals listed in the legacy portal directory.",
    accessInstruction: "Open access online — evaluate articles against departmental peer-review criteria.",
    url: "https://www.omicsonline.org/",
  },
  {
    id: "jstor",
    title: "JSTOR (Including Global Plants & Aluka Archives)",
    category: "databases",
    accessType: "librarian-assisted",
    subjectArea: "Humanities, Social Sciences & Archives",
    description:
      "Archival backfiles of over 1,500 core scholarly journals across disciplines, plus JSTOR Global Plants, African World Heritage Sites, and Southern African Struggles for Freedom.",
    accessInstruction:
      "Institutional username: godfreyokoye — ask a librarian for current password and sub-collection access.",
    url: "https://www.jstor.org/action/showLogin",
    secondaryUrl: "https://plants.jstor.org/",
    secondaryLabel: "JSTOR Global Plants",
  },
  {
    id: "agora",
    title: "AGORA (Access to Global Online Research in Agriculture)",
    category: "databases",
    accessType: "librarian-assisted",
    subjectArea: "Agriculture, Economics & Environmental Science",
    description:
      "Over 3,000 online journals in agriculture and related disciplines provided to developing countries via the FAO and Research4Life.",
    accessInstruction:
      "Research4Life username: N1E359 — obtain password from a librarian and clear browser cache before switching between Research4Life platforms.",
    url: "https://www.research4life.org/",
  },
  {
    id: "hinari",
    title: "HINARI (Access to Research in Health Programme)",
    category: "databases",
    accessType: "librarian-assisted",
    subjectArea: "Health, Medicine & Nursing",
    description:
      "World Health Organization programme providing online biomedical databases and full-text health journals.",
    accessInstruction:
      "Research4Life username: N1E359 — request current institutional password from library staff.",
    url: "https://www.who.int/hinari/en/",
  },
  {
    id: "ardi",
    title: "ARDI (Access to Research for Development and Innovation)",
    category: "databases",
    accessType: "librarian-assisted",
    subjectArea: "Science & Technology",
    description:
      "Over 2,000 scientific and technical journals and reference works coordinated by WIPO under Research4Life.",
    accessInstruction:
      "Research4Life username: N1E359 — ask a librarian to verify login status and current password.",
    url: "https://www.research4life.org/",
  },
  {
    id: "oare",
    title: "OARE (Online Access to Research in the Environment)",
    category: "databases",
    accessType: "librarian-assisted",
    subjectArea: "Environmental & Earth Sciences",
    description:
      "International consortium led by UNEP providing environmental science journals.",
    accessInstruction:
      "Research4Life username: N1E359 — verify active institutional access status with the Reference Desk.",
    url: "https://www.research4life.org/",
  },
  {
    id: "national-virtual-library",
    title: "NUC Nigerian Virtual Library",
    category: "databases",
    accessType: "librarian-assisted",
    subjectArea: "Multidisciplinary (NUC Nigeria)",
    description:
      "Academic journals and educational resources maintained by the National Universities Commission (NUC) for Nigerian universities.",
    accessInstruction:
      "Institutional username: GOU — ask a librarian for current access credentials.",
    url: "http://www.nigerianvirtuallibrary.com/",
  },
  {
    id: "eric",
    title: "ERIC (Education Resources Information Center)",
    category: "databases",
    accessType: "open",
    subjectArea: "Education Research",
    description:
      "Comprehensive bibliographic and abstract database of education research maintained by the U.S. Department of Education.",
    accessInstruction: "Open access search portal.",
    url: "https://eric.ed.gov/",
  },
  {
    id: "proquest-collections",
    title: "ProQuest Subject Databases (ABI/INFORM & Specialized Collections)",
    category: "databases",
    accessType: "librarian-assisted",
    subjectArea: "Business, Law, Health, Humanities, Computing & Sciences",
    description:
      "Includes ABI/INFORM, Accounting Tax & Banking, Arts & Humanities, Biology, Business Market Research, Computing, Education, Family Health, Health & Medical, Health Management, Library Science, Linguistics, Nursing & Allied Health, Political Science, ProQuest Central, Psychology, Public Health, Religion, Research Library, Science, Social Science, Sociology, Telecommunications, and Regional Databases listed in the 2017 library directory.",
    accessInstruction:
      "Ask a librarian to confirm current ProQuest subscription status and access credentials (legacy links used temporary trial tokens).",
  },
  {
    id: "edx",
    title: "edX Open Courses",
    category: "open-courseware",
    accessType: "registration-free",
    subjectArea: "Online Courses & Lectures",
    description:
      "University-level online courses developed by leading international institutions including Harvard, MIT, and UC Berkeley.",
    accessInstruction: "Free course audit available with online account.",
    url: "https://www.edx.org/",
  },
  {
    id: "mit-ocw",
    title: "OpenCourseWare Consortium & MIT OpenCourseWare",
    category: "open-courseware",
    accessType: "open",
    subjectArea: "Open Lecture Notes & Syllabi",
    description:
      "Free openly published university lecture notes, assignments, and syllabi from participating global universities.",
    accessInstruction: "Open access — no registration required.",
    url: "https://ocw.mit.edu/",
  },
  {
    id: "cbn-publications",
    title: "Central Bank of Nigeria (CBN) Documents & Publications",
    category: "open-courseware",
    accessType: "open",
    subjectArea: "Economics, Banking & Nigerian Policy",
    description:
      "Official Central Bank of Nigeria circulars, economic reports, regulations, and the Economic & Financial Review.",
    accessInstruction: "Open access on the CBN website.",
    url: "https://www.cbn.gov.ng/Documents/",
  },
  {
    id: "undata",
    title: "UNdata Statistical Databases",
    category: "open-courseware",
    accessType: "open",
    subjectArea: "Global & Nigerian Statistics",
    description:
      "Searchable and downloadable statistical indicators across 34 United Nations databases with national agency links including Nigeria.",
    accessInstruction: "Open access online.",
    url: "https://data.un.org/",
  },
  {
    id: "world-bank-data",
    title: "World Bank Country Data (Nigeria & Global Reports)",
    category: "open-courseware",
    accessType: "open",
    subjectArea: "Development Economics & Reports",
    description:
      "Country-by-country economic indicators and full-text World Bank research reports covering Nigeria and global regions.",
    accessInstruction: "Open access online.",
    url: "https://www.worldbank.org/en/country/nigeria",
    secondaryUrl: "https://www.worldbank.org/en/country",
    secondaryLabel: "All Countries",
  },
];
