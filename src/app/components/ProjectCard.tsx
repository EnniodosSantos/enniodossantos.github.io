import { ExternalLink, Github, TrendingUp, Database, Brain } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  status?: "live" | "in-progress" | "coming-soon";
  liveUrl?: string;
  githubUrl?: string;
  githubPlaceholder?: boolean;
  comingSoon?: boolean;
  gradient?: string;
  icon?: "chart" | "database" | "brain";
  openInModal?: boolean;
  onOpenModal?: () => void;
  githubOpenInModal?: boolean;
  onOpenGithubModal?: () => void;
  backgroundImage?: string;
}

export function ProjectCard({
  title,
  description,
  stack,
  status = "live",
  liveUrl,
  githubUrl,
  githubPlaceholder = false,
  comingSoon = false,
  gradient = "from-blue-400 to-blue-600",
  icon = "chart",
  openInModal = false,
  onOpenModal,
  githubOpenInModal = false,
  onOpenGithubModal,
  backgroundImage,
}: ProjectCardProps) {
  const iconMap = {
    chart: TrendingUp,
    database: Database,
    brain: Brain,
  };

  const Icon = iconMap[icon];

  return (
    <div
      className={`group bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-md ${
        comingSoon
          ? "opacity-60"
          : "hover:shadow-2xl hover:-translate-y-2"
      }`}
    >
      {/* Image Placeholder with Gradient or Background Image */}
      <div className={`aspect-[16/10] bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
        {/* Background Image */}
        {backgroundImage && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-70`} />
          </>
        )}

        {comingSoon && (
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)] z-10" />
        )}

        {/* Decorative circles */}
        {!backgroundImage && (
          <>
            <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
          </>
        )}

        {/* Icon with better contrast when image present */}
        <Icon size={64} className={`${backgroundImage ? 'text-white drop-shadow-2xl' : 'text-white/90'} relative z-10`} />

        {/* Status Badge */}
        {status === "live" && (
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-gray-800">No ar</span>
          </div>
        )}
        {status === "in-progress" && (
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-gray-800">Em desenvolvimento</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[var(--portfolio-text-primary)] mb-3 group-hover:text-[var(--portfolio-primary)] transition-colors">
          {title}
        </h3>

        <p className="text-sm text-[var(--portfolio-text-secondary)] mb-4 leading-relaxed">
          {description}
        </p>

        {/* Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-gray-50 to-gray-100 text-[var(--portfolio-text-secondary)] rounded-full border border-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        {!comingSoon && (
          <div className="flex gap-3 pt-4 border-t border-gray-100">
            {openInModal && onOpenModal ? (
              <button
                onClick={onOpenModal}
                className="flex items-center gap-2 px-4 py-2 bg-[var(--portfolio-primary)] text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                <ExternalLink size={16} />
                Ver projeto
              </button>
            ) : liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[var(--portfolio-primary)] text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                <ExternalLink size={16} />
                Ver projeto
              </a>
            ) : null}

            {githubUrl && !openInModal && (
              <div className="flex items-center gap-2">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border-2 border-gray-200 text-[var(--portfolio-text-primary)] rounded-lg text-sm font-medium hover:border-[var(--portfolio-primary)] hover:text-[var(--portfolio-primary)] transition-colors"
                >
                  <Github size={16} />
                  Código
                </a>
                {githubPlaceholder && (
                  <span className="px-2 py-1 text-xs font-medium text-[var(--portfolio-danger)] bg-red-50 rounded">
                    ⚠ link pendente
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
