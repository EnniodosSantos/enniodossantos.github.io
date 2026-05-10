import { X, ExternalLink, Github, Play } from "lucide-react";
import { useEffect } from "react";

interface ProjectPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  stack: string[];
  gradient: string;
}

export function ProjectPreviewModal({
  isOpen,
  onClose,
  title,
  description,
  liveUrl,
  githubUrl,
  stack,
  gradient,
}: ProjectPreviewModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full transition-colors shadow-lg"
          aria-label="Fechar modal"
        >
          <X size={24} className="text-gray-700" />
        </button>

        {/* Header with Gradient */}
        <div className={`bg-gradient-to-br ${gradient} p-12 text-white relative overflow-hidden`}>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <span className="text-sm font-semibold">Projeto em Destaque</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-white/90 max-w-2xl">{description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Stack */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Tecnologias Utilizadas
            </h3>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-lg border border-gray-200 font-medium text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <ExternalLink size={20} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">
                  Abrir em nova aba recomendado
                </h4>
                <p className="text-sm text-gray-600">
                  Para a melhor experiência e funcionalidade completa, este projeto será aberto em uma nova aba do navegador.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 flex-col sm:flex-row">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Play size={20} />
                Ver Projeto ao Vivo
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50 rounded-xl font-semibold transition-all"
              >
                <Github size={20} />
                Ver Código
              </a>
            )}
          </div>

          {/* Footer Note */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Pressione ESC ou clique fora para fechar
          </p>
        </div>
      </div>
    </div>
  );
}
