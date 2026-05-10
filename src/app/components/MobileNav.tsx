import { Menu, X, User } from "lucide-react";
import { useState } from "react";

interface MobileNavProps {
  activeSection: string;
}

export function MobileNav({ activeSection }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Início" },
    { id: "projects", label: "Projetos" },
    { id: "skills", label: "Habilidades" },
    { id: "experience", label: "Experiência" },
    { id: "about", label: "Sobre" },
    { id: "contact", label: "Contato" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <User size={20} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-sm text-[var(--portfolio-text-primary)]">
                Ennio dos Santos
              </p>
              <p className="text-xs text-[var(--portfolio-text-secondary)]">
                Data Science
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40 top-[57px]"
            onClick={() => setIsOpen(false)}
          />

          <div className="lg:hidden fixed top-[57px] left-0 right-0 bg-white z-50 shadow-xl max-h-[calc(100vh-57px)] overflow-y-auto">
            <nav className="p-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeSection === link.id
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold"
                      : "text-[var(--portfolio-text-secondary)] hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
}
