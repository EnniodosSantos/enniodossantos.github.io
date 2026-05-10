interface SkillBadgeProps {
  skills: string[];
  category: "data-science" | "bi" | "engineering";
}

export function SkillBadge({ skills, category }: SkillBadgeProps) {
  const categoryColors = {
    "data-science": "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-blue-200 hover:from-blue-100 hover:to-blue-200",
    bi: "bg-gradient-to-r from-teal-50 to-emerald-100 text-teal-700 border-teal-200 hover:from-teal-100 hover:to-emerald-200",
    engineering: "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 border-gray-200 hover:from-gray-100 hover:to-gray-200",
  };

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className={`px-3 py-2 text-sm font-medium rounded-lg border transition-all cursor-default ${categoryColors[category]}`}
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
