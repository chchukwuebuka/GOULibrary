export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  verificationNote?: string;
}

export const LIBRARY_FAQS: FAQItem[] = [
  {
    id: "who-can-use",
    question: "Who can use the university library?",
    answer:
      "Registered students, academic staff, and administrative staff of Godfrey Okoye University and the Institute for Ecumenical Education (IECE) are eligible to use the library. External visitors and researchers may also use the library for on-site consultation upon presenting a formal letter of introduction from their home institution’s library.",
  },
  {
    id: "how-to-register",
    question: "How do I register as a library user?",
    answer:
      "Students and staff should visit the Library Circulation Desk with their official Godfrey Okoye University or IECE identification card to activate borrowing privileges.",
    verificationNote:
      "Specific semester registration forms and clearance onboarding steps should be confirmed directly at the Circulation Desk.",
  },
  {
    id: "can-i-borrow",
    question: "Can I borrow books from the library?",
    answer:
      "Yes. Eligible students and staff with valid GOU or IECE identification may borrow books from the General Circulating Collection. Reference books, periodicals, University Archives, Institute projects, and Reserve items (including CDs/DVDs) are strictly for in-library use and cannot be taken outside.",
  },
  {
    id: "loan-duration",
    question: "How long can I keep borrowed books?",
    answer:
      "Under the Senate-approved Circulation Policy, general circulating books are issued for a 1-week borrowing period and may be renewed up to two (2) times provided no other user has requested the item. Reserve materials and digital media are loaned for three (3) hours for use inside the library.",
    verificationNote:
      "Confirm whether updated borrowing durations or item quotas apply to your faculty or postgraduate programme.",
  },
  {
    id: "off-campus-digital",
    question: "Can I access digital resources outside the campus?",
    answer:
      "Open-access resources — including the GOUNI Institutional Repository (eprints.gouni.edu.ng), AJOL, DOAJ, and linked open courseware — are accessible from anywhere with an internet connection. Subscribed or Research4Life databases may require institutional usernames, passwords, or access tokens provided by library staff.",
    verificationNote:
      "Confirm current remote authentication procedures and active database subscriptions with the Reference Desk.",
  },
  {
    id: "catalogue-access",
    question: "How do I access the library catalogue?",
    answer:
      "You can open the university’s Mandarin M5 Online Public Access Catalogue (OPAC) directly through the Library Catalogue section on this page or via gouni.mlasolutions.com to search holdings, titles, authors, and subject classifications.",
  },
  {
    id: "visitors-access",
    question: "Can visitors use the university library?",
    answer:
      "Yes. Visiting scholars and external researchers may access the reading rooms for reference use by presenting a valid letter of introduction from the library of their home institution. Visitors are not permitted to borrow items outside the library premises.",
  },
  {
    id: "lost-book",
    question: "What happens if I lose a borrowed book?",
    answer:
      "Borrowers are responsible for safeguarding all checked-out materials and reporting any loss or damage promptly to library staff. Under the Senate Circulation Policy, lost items require replacement with a good copy of the same title or settlement of the approved replacement cost and administrative charge prior to University clearance.",
    verificationNote:
      "Confirm current replacement valuation and administrative charge schedules with the Circulation Desk.",
  },
  {
    id: "research-assistance",
    question: "How do I get research assistance?",
    answer:
      "Visit the Reference Desk inside the University Library for individual consultation on literature searches, MARC/Library of Congress shelf navigation, citation resources, or accessing Research4Life and GOUNI Repository publications.",
  },
  {
    id: "contact-librarian",
    question: "How can I contact the University Librarian?",
    answer:
      "You may visit the Office of the University Librarian (Assoc. Prof. Juliana Iwu-James, Ph.D.) at the Main Library on the Thinkers Corner Campus, call the Library Desk on 07069186018, or direct formal enquiries through info@gouni.edu.ng or registrar@gouni.edu.ng.",
    verificationNote:
      "Confirm dedicated direct library office email address with ICT / Library Administration.",
  },
];
