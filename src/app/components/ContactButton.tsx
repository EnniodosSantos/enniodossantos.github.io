import { LucideIcon } from "lucide-react";

interface ContactButtonProps {
  icon: LucideIcon;
  label: string;
  url: string;
  isPlaceholder?: boolean;
}

export function ContactButton({
  icon: Icon,
  label,
  url,
  isPlaceholder = false,
}: ContactButtonProps) {
  return (
    <a
      href={isPlaceholder ? "#" : url}
      target={isPlaceholder ? undefined : "_blank"}
      rel={isPlaceholder ? undefined : "noopener noreferrer"}
      className={`flex items-center gap-4 p-4 bg-white border border-[#E5E5E5] rounded-lg transition-all ${
        isPlaceholder
          ? "cursor-not-allowed opacity-75"
          : "hover:shadow-md hover:-translate-y-0.5"
      }`}
      onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
    >
      <div className="p-2 bg-[var(--portfolio-section-alt)] rounded">
        <Icon size={20} className="text-[var(--portfolio-primary)]" />
      </div>

      <div className="flex-1">
        <div className="text-sm font-semibold text-[var(--portfolio-text-primary)]">
          {label}
        </div>
        <div className="text-xs text-[var(--portfolio-text-secondary)] truncate">
          {url}
        </div>
      </div>

      {isPlaceholder && (
        <span className="px-2 py-1 text-xs font-medium text-[var(--portfolio-danger)] bg-red-50 rounded whitespace-nowrap">
          ⚠ link pendente
        </span>
      )}
    </a>
  );
}
