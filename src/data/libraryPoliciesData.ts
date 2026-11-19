export type PolicySlug =
  | "library-rules"
  | "circulation-policy"
  | "cataloging-policy"
  | "collection-development-policy"
  | "digital-media";

export interface PolicySectionBlock {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  orderedItems?: string[];
}

export interface CirculationRateRow {
  category: string;
  userGroup: string;
  borrowingPeriod: string;
  lateFine: string;
}

export interface PolicyDocumentData {
  slug: PolicySlug;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  approvalBadge: string;
  verificationMessage: string;
  sections: PolicySectionBlock[];
  circulationRates?: CirculationRateRow[];
}

export const POLICY_DOCUMENTS: Record<PolicySlug, PolicyDocumentData> = {
  "library-rules": {
    slug: "library-rules",
    title: "Basic Library Rules & Regulations",
    shortTitle: "Basic Library Rules",
    eyebrow: "Senate Governance Policy",
    summary:
      "Official conduct, identification, facility care, and reading-room standards governing all users of the Godfrey Okoye University Library.",
    approvalBadge:
      "Approved by the Senate Library and Publications Committee (25 May 2010) and University Senate (2 June 2010).",
    verificationMessage:
      "Rule clauses reflect the Senate-approved policy published on the university library portal. Confirm any recent semester updates or fine revisions directly with the University Librarian.",
    sections: [
      {
        heading: "Twelve Basic Library Rules",
        orderedItems: [
          "Users must present their GOU or IECE identification, or a formal letter of introduction from the library of their home institution.",
          "All personal bags and personal books are to be left on the table provided before entering the reading space.",
          "All cell phones must be switched off or set to silent. No telephone conversations are to be held in the Library.",
          "No food or drink is permitted in the Library.",
          "No “colonization” of seats.",
          "Readers must maintain an atmosphere conducive to studying: quiet, calm, and neat.",
          "Care must be taken of all library materials and equipment. Readers will be charged for any damage they cause.",
          "All users must leave the Library promptly during prayers and break periods.",
          "Negligent or intentional damage to Library property will result in a fine equal to the cost of the item plus such other fine as the University shall determine.",
          "No notices or posters shall be mounted without the permission of the University Librarian.",
          "Institute projects may not be borrowed or photocopied.",
          "Failure to obey rules or meet obligations to the Library may result in loss of library privileges.",
        ],
      },
    ],
  },

  "circulation-policy": {
    slug: "circulation-policy",
    title: "Library Circulation Policy",
    shortTitle: "Circulation Policy",
    eyebrow: "Borrowing & Loan Standards",
    summary:
      "Rules governing book borrowing eligibility, reserve materials, renewals, damage reporting, overdue charges, and university clearance.",
    approvalBadge:
      "Approved by Senate Library & Publications Committee (25 May 2010), University Senate (2 June 2010), and amended by Senate (29 March 2011).",
    verificationMessage:
      "Borrowing periods and Naira fine rates shown below reflect the March 2011 Senate-amended schedule. Confirm current semester loan quotas and updated fine schedules at the Circulation Desk.",
    sections: [
      {
        heading: "Eligibility & Non-Circulating Collections",
        paragraphs: [
          "The Library circulates general books to students and staff of both Godfrey Okoye University (GOU) and the Institute for Ecumenical Education (IECE). Borrowers must present valid GOU or IECE identification before checking out any material.",
          "Reference books, periodicals, and CDs do not circulate outside the Library. The Library also maintains a Reserve collection of high-demand or hard-to-replace items, which may be borrowed strictly for in-library use.",
        ],
      },
      {
        heading: "Condition Inspection & Renewals",
        paragraphs: [
          "When borrowing any item, the user should point out any pre-existing damage to Library staff so that it is recorded on the book card. The borrower is held responsible for any unrecorded damage upon return.",
          "Borrowed items may be renewed up to two (2) times provided no other reader has requested the item. After two renewals, the book must be physically returned before it can be checked out again.",
        ],
      },
      {
        heading: "Lost, Damaged Items & University Clearance",
        paragraphs: [
          "If a borrower loses a book, they shall pay an administrative charge of N100 plus the replacement cost of the book (or N1,500 if non-replaceable). The replacement fine is waived or refunded if a good copy of the same title is supplied; the administrative fee is non-refundable.",
          "Damaged items incur the cost of repair or, if irreparable, are charged as lost. Failure to pay fines or other abuse of rules may result in loss of privileges, and all library obligations must be fulfilled to obtain University clearance. Exceptions require the University Librarian’s approval.",
        ],
      },
      {
        heading: "Policy Review Procedure",
        paragraphs: [
          "Librarians review the Circulation Policy at least every five years. Proposed revisions are circulated to library staff and the Vice Chancellor before submission to the Senate Library and Publications Committee for approval, and operational details are maintained in the Library’s procedure manual.",
        ],
      },
    ],
    circulationRates: [
      {
        category: "General Circulating Books",
        userGroup: "GOU Academic Staff",
        borrowingPeriod: "1 week",
        lateFine: "N10 / day",
      },
      {
        category: "General Circulating Books",
        userGroup: "GOU Administrative Staff",
        borrowingPeriod: "1 week",
        lateFine: "N50 / day",
      },
      {
        category: "General Circulating Books",
        userGroup: "GOU Students",
        borrowingPeriod: "1 week",
        lateFine: "N50 / day",
      },
      {
        category: "General Circulating Books",
        userGroup: "IECE Academic & Administrative Staff",
        borrowingPeriod: "1 week",
        lateFine: "N50 / day",
      },
      {
        category: "General Circulating Books",
        userGroup: "IECE Post-Graduate Students",
        borrowingPeriod: "1 week",
        lateFine: "N50 / day",
      },
      {
        category: "Reserve Items",
        userGroup: "All Eligible Borrowers (In-Library Use)",
        borrowingPeriod: "3 hours",
        lateFine: "N30 / hour",
      },
    ],
  },

  "cataloging-policy": {
    slug: "cataloging-policy",
    title: "Library Cataloging Policy",
    shortTitle: "Cataloging Policy",
    eyebrow: "Bibliographic Standards",
    summary:
      "International cataloging, MARC 21 metadata, AACR2R descriptive rules, and Library of Congress classification standards used to organise library collections.",
    approvalBadge:
      "Approved by the Senate Library and Publications Committee (25 May 2010) and University Senate (2 June 2010).",
    verificationMessage:
      "Cataloging standards reflect the Senate-approved policy. Note that the library now operates its Mandarin M5 OPAC online catalogue in alignment with its integrated library system mandate.",
    sections: [
      {
        heading: "Purpose & Commitment to International Standards",
        paragraphs: [
          "Cataloging is the process by which the library organises information resources so readers can discover materials reliably and effortlessly. Supporting a growing university, Godfrey Okoye University Library commits to international academic library standards so visiting scholars find familiar organisation and graduates can navigate academic libraries worldwide.",
        ],
      },
      {
        heading: "Integrated Library System (ILS) & Record Format",
        paragraphs: [
          "The Library mandates a standard online catalogue integrated within an international-standard ILS using full MARC records for bibliographic control, capturing unique accession numbers for every copy.",
        ],
      },
      {
        heading: "Descriptive Standards (AACR2R & Copy Cataloging)",
        paragraphs: [
          "Descriptive cataloging follows the Anglo-American Cataloging Rules, 2nd edition (AACR2R, 2005 revision), while professional cataloguers keep pace with evolving frameworks such as FRBR. Copy cataloging records are reviewed by professional librarians for accuracy, and local cataloging decisions are documented in the Cataloging Policy Manual.",
        ],
      },
      {
        heading: "Classification & Call Number Structure",
        paragraphs: [
          "All materials are classified under the latest schedules of the Library of Congress Classification scheme, verified for shelf consistency and updated with publication dates for first editions.",
        ],
        bullets: [
          "Prefix designation where applicable: Ref (Reference), Per (Periodical), Juv (Juvenile).",
          "Library of Congress classification number, including Cutter number and publication date.",
          "Copy number for additional copies (except copy 1), formatted as c. 2, etc.",
        ],
      },
      {
        heading: "MARC 21 Data Standards & Review",
        paragraphs: [
          "All bibliographic records follow the MARC 21 standard. Policies are reviewed at least every five years with input from library staff and the Vice Chancellor prior to submission to the Senate Library and Publications Committee.",
        ],
      },
    ],
  },

  "collection-development-policy": {
    slug: "collection-development-policy",
    title: "Collection Development Policy",
    shortTitle: "Collection Development",
    eyebrow: "Acquisition & Archives Policy",
    summary:
      "Goals, acquisition priorities, selection criteria, University Archives preservation, gifts, and collection weeding standards.",
    approvalBadge:
      "Approved by the Senate Library and Publications Committee (25 May 2010) and University Senate (2 June 2010).",
    verificationMessage:
      "Reflects the official Senate-approved Collection Development Policy. Faculty members wishing to recommend new textbooks or databases should submit requests through the University Librarian.",
    sections: [
      {
        heading: "I. Goals & Objectives",
        paragraphs: [
          "The Collection Development Policy supports Godfrey Okoye University’s vision and mission of delivering quality higher education through evidence-based, dialogic scholarship. Working alongside academic staff, the Library builds diverse collections reflecting the University’s Catholic and ecumenical heritage and its goal of producing graduates outstanding in learning, balanced in character, and committed to epistemic unity.",
        ],
      },
      {
        heading: "II. Priorities in Material Acquisition",
        orderedItems: [
          "Curriculum Needs: Materials supporting faculty lecture preparation and student coursework, projects, and assignments.",
          "General & Reference Materials: Core academic works across disciplines beyond immediate course syllabi.",
          "Areas of Special Interest: Theology, religious and cultural dialogue, and Igbo culture and history.",
          "Research Materials: Resources supporting student research and locating external scholarship, alongside academic staff research as funding permits.",
          "Recreational Needs: Leisure reading enriching campus life without displacing academic priorities.",
          "University Archives: Closed-stack preservation of at least one copy of every publication by the University, its staff, students, student groups, and alumni (consulted in-library under staff supervision).",
        ],
      },
      {
        heading: "III. Responsibility for Selection & IV. Criteria",
        paragraphs: [
          "Library staff, academic staff, administrators, and students may initiate acquisition requests, while final responsibility for collection balance rests with the Library and all additions require approval by the University Librarian or designated staff.",
        ],
        bullets: [
          "General Criteria: Medium suitability, critical reception, historical importance, social insight, author authority, physical durability, and bibliographic completeness.",
          "Specific Criteria: Authenticity, authority, clarity and accuracy, depth of treatment, objectivity, artistic quality, and representation of diverse viewpoints.",
        ],
      },
      {
        heading: "V. Format & Category Guidelines",
        bullets: [
          "Reference Materials: Selected largely by the University Librarian to anchor bibliographic discovery.",
          "Audio-Visual Materials: Dedicated acquisition line favouring durable optical media (CDs/DVDs) aligned with available computing equipment.",
          "Juvenile Collection: Curated with Education faculty to support teacher-training students.",
          "Textbooks & Multiple Copies: Focuses on foundational or scarce textbooks; normally limited to two copies unless Reserve demand justifies more.",
          "Rare Books & Theses: Rare items designated by age, value, and condition; external theses acquired only when uniquely available in a field.",
          "Electronic Resources: Evaluated for academic content, technical compatibility, management standards, and usage analytics.",
        ],
      },
      {
        heading: "VI. Selection Standards, VII. Gifts & VIII. Weeding",
        paragraphs: [
          "Durable hardback editions are preferred where cost-effective; mass-market paperbacks are avoided, and non-English acquisitions focus on languages taught at the University plus essential reference dictionaries. Censorship is not practised within curricular and cultural relevance.",
          "Unrestricted gifts that strengthen collection priorities are welcomed, acknowledged, and reported to the Vice Chancellor’s Office. Regular weeding removes obsolete, superseded, or irreparable materials based on circulation data and joint faculty-librarian review.",
        ],
      },
    ],
  },

  "digital-media": {
    slug: "digital-media",
    title: "Digital Media & Audiovisual Reserve",
    shortTitle: "Digital Media & AV",
    eyebrow: "In-Library Audiovisual Resources",
    summary:
      "Access guidelines for CDs, DVDs, optical workstations, and headphone sets held at the Library Circulation Desk.",
    approvalBadge: "Published Library Facility & Reserve Service Standard.",
    verificationMessage:
      "Confirm current optical workstation availability and active audiovisual holdings directly at the Circulation Desk.",
    sections: [
      {
        heading: "Reserve Audiovisual Holdings",
        paragraphs: [
          "In addition to its online databases and institutional repository, the University Library maintains a collection of physical digital media such as educational CDs and DVDs.",
          "These materials are held at the Circulation Desk and governed under Reserve material guidelines: they may be borrowed for three (3) hours at a time and must not leave the Library premises.",
        ],
      },
      {
        heading: "Library Workstations & Headphone Loans",
        bullets: [
          "Audiovisual media items are catalogued alongside books and audiovisual files for discovery through library personnel and the catalogue.",
          "Library computers are equipped with CD/DVD drives for viewing instructional media in-house.",
          "Headphone sets are available at the Circulation Desk and may be checked out as 3-hour Reserve items upon presenting valid university identification.",
        ],
      },
    ],
  },
};

export const POLICY_NAV_LIST: {
  slug: PolicySlug;
  title: string;
  href: string;
}[] = [
  {
    slug: "library-rules",
    title: "Basic Library Rules",
    href: "/library-rules",
  },
  {
    slug: "circulation-policy",
    title: "Circulation Policy",
    href: "/circulation-policy",
  },
  {
    slug: "cataloging-policy",
    title: "Cataloging Policy",
    href: "/cataloging-policy",
  },
  {
    slug: "collection-development-policy",
    title: "Collection Development Policy",
    href: "/collection-development-policy",
  },
  {
    slug: "digital-media",
    title: "Digital Media & AV",
    href: "/digital-media",
  },
];
