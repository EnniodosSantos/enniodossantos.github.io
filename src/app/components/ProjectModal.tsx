import { X, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

export function ProjectModal({ isOpen, onClose, url, title }: ProjectModalProps) {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setLoading(true);
      setHasError(false);
      setIframeKey(prev => prev + 1);

      // Timeout de segurança - se não carregar em 10 segundos, considerar erro
      const timeout = setTimeout(() => {
        setLoading(false);
        setHasError(true);
      }, 10000);

      return () => {
        clearTimeout(timeout);
      };
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, url]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleIframeLoad = () => {
    console.log("Iframe carregado com sucesso");
    setLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    console.log("Erro ao carregar iframe");
    setLoading(false);
    setHasError(true);
  };

  if (!isOpen) return null;

  // Detectar se é GitHub (que bloqueia iframes)
  const isGithub = url.includes('github.com');
  // Detectar se é Streamlit
  const isStreamlit = url.includes('streamlit.app');

  console.log("Modal aberto com URL:", url);
  console.log("É GitHub?", isGithub);
  console.log("É Streamlit?", isStreamlit);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-7xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white z-10">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[var(--portfolio-text-primary)]">
              {title}
            </h3>
            <p className="text-sm text-[var(--portfolio-text-secondary)]">
              {isGithub ? "Repositório GitHub" : "Visualização do projeto"}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-[var(--portfolio-primary)] hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors text-sm"
            >
              <ExternalLink size={16} />
              Abrir em nova aba
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-[var(--portfolio-text-primary)] rounded-lg font-semibold transition-colors text-sm"
            >
              FECHAR
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Fechar modal"
            >
              <X size={24} className="text-[var(--portfolio-text-secondary)]" />
            </button>
          </div>
        </div>

        {/* Iframe Container */}
        <div className="flex-1 bg-gray-50 relative overflow-hidden">
          {isGithub ? (
            // GitHub bloqueia iframes - mensagem alternativa
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-8">
              <div className="max-w-md text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ExternalLink size={40} className="text-gray-500" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--portfolio-text-primary)] mb-3">
                  Visualização não disponível
                </h3>
                <p className="text-[var(--portfolio-text-secondary)] mb-6">
                  O GitHub não permite visualização em iframes por questões de segurança.
                </p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--portfolio-primary)] hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                >
                  <ExternalLink size={20} />
                  Abrir repositório no GitHub
                </a>
              </div>
            </div>
          ) : (
            <>
              <iframe
                key={iframeKey}
                src={url}
                className="w-full h-full border-0 bg-white"
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="eager"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                style={{ display: loading ? 'none' : 'block' }}
              />

              {/* Loading indicator */}
              {loading && !hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-white z-20">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-[var(--portfolio-primary)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-sm text-[var(--portfolio-text-secondary)] mb-2">
                      Carregando projeto...
                    </p>
                    <p className="text-xs text-[var(--portfolio-text-secondary)]">
                      Isso pode levar alguns segundos
                    </p>
                  </div>
                </div>
              )}

              {/* Error state */}
              {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 z-20">
                  <div className="text-center max-w-md p-8">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <X size={40} className="text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--portfolio-text-primary)] mb-3">
                      Não foi possível carregar
                    </h3>
                    <p className="text-[var(--portfolio-text-secondary)] mb-6">
                      O projeto pode bloquear visualização em iframes ou estar temporariamente indisponível.
                    </p>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--portfolio-primary)] hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                    >
                      <ExternalLink size={20} />
                      Abrir em nova aba
                    </a>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-200 bg-gray-50 z-10">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[var(--portfolio-text-secondary)]">
              {isGithub
                ? "Clique no botão acima para visualizar no GitHub"
                : hasError
                  ? "Recomendamos abrir em nova aba para melhor visualização"
                  : "Para melhor experiência, abra em uma nova aba"}
            </p>
            <p className="text-xs text-[var(--portfolio-text-secondary)] hidden md:block">
              Pressione ESC para fechar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
