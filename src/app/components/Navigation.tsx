import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-[#E5E5E5] z-50">
      <div className="max-w-[1080px] mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-medium text-[var(--portfolio-text-primary)]">
          Ennio dos Santos
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm transition-colors relative ${
                activeSection === link.id
                  ? "text-[var(--portfolio-primary)]"
                  : "text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-text-primary)]"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-[var(--portfolio-primary)]" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E5E5E5]">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-3 text-left text-sm ${
                  activeSection === link.id
                    ? "text-[var(--portfolio-primary)] bg-[var(--portfolio-section-alt)]"
                    : "text-[var(--portfolio-text-secondary)]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
