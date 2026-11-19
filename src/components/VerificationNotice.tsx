import { AlertCircle } from "lucide-react";
import shared from "@/styles/shared.module.css";

interface VerificationNoticeProps {
  message: string;
  className?: string;
}

/**
 * Displays a discreet institutional verification reminder where policy or desk details await confirmation.
 */
export function VerificationNotice({
  message,
  className,
}: VerificationNoticeProps) {
  return (
    <aside
      className={
        className ? `${shared.verificationNote} ${className}` : shared.verificationNote
      }
      aria-label="Institutional verification notice"
    >
      <AlertCircle size={18} className={shared.verificationIcon} aria-hidden="true" />
      <p>{message}</p>
    </aside>
  );
}
