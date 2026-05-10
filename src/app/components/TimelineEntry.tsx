interface TimelineEntryProps {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export function TimelineEntry({
  role,
  company,
  period,
  bullets,
}: TimelineEntryProps) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3px] rounded-full bg-[var(--portfolio-primary)]" />

      <div>
        <h3 className="text-lg font-semibold text-[var(--portfolio-text-primary)]">
          {role}
        </h3>
        <div className="text-sm text-[var(--portfolio-text-secondary)] mb-3">
          {company} · {period}
        </div>

        <ul className="space-y-2">
          {bullets.map((bullet, index) => (
            <li
              key={index}
              className="text-sm text-[var(--portfolio-text-secondary)] flex gap-3"
            >
              <span className="text-[var(--portfolio-primary)] mt-1.5 w-1 h-1 rounded-full bg-[var(--portfolio-primary)] flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
