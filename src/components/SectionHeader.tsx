import shared from "@/styles/shared.module.css";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  lead?: string;
  centered?: boolean;
  compact?: boolean;
  inverse?: boolean;
  titleId?: string;
}

/**
 * Reusable editorial section heading block supporting light and navy surfaces.
 */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  centered = false,
  compact = false,
  inverse = false,
  titleId,
}: SectionHeaderProps) {
  const wrapperClass = centered
    ? shared.sectionHeaderCentered
    : compact
      ? shared.sectionHeaderCompact
      : shared.sectionHeader;

  return (
    <header className={wrapperClass}>
      <p className={inverse ? shared.eyebrowInverse : shared.eyebrow}>
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className={inverse ? shared.sectionTitleInverse : shared.sectionTitle}
      >
        {title}
      </h2>
      {lead ? (
        <p className={inverse ? shared.sectionLeadInverse : shared.sectionLead}>
          {lead}
        </p>
      ) : null}
    </header>
  );
}
