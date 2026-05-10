import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import fotoAvatar from "../../imports/foto.jpg";

interface SidebarProps {
  activeSection: string;
}

export function Sidebar({ activeSection }: SidebarProps) {
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
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-80 bg-white border-r border-gray-200 overflow-y-auto p-8 hidden lg:block">
    <div className="flex flex-col items-center text-center mb-8">
    {/* Profile Picture */}
    <img
    src={fotoAvatar}
    alt="Ennio dos Santos"
    className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
    />
    {/* Name and Title */}
    <h1 className="text-2xl font-bold text-[var(--portfolio-text-primary)] mb-2">
    Ennio dos Santos
    </h1>
    <p className="text-sm text-[var(--portfolio-text-secondary)] mb-1">
    Estudante de Ciência de Dados
    </p>
    <div className="flex items-center gap-1 text-xs text-[var(--portfolio-text-secondary)] mb-6">
    <MapPin size={12} />
    <span>Belém, PA · Brasil</span>
    </div>

    {/* Social Links */}
    <div className="flex gap-3 mb-6">
    <a
    href="https://github.com/EnniodosSantos"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-gray-100 rounded-full hover:bg-[var(--portfolio-primary)] hover:text-white transition-colors"
    >
    <Github size={18} />
    </a>
    <a
    href="https://www.linkedin.com/in/enniobernardo/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-gray-100 rounded-full hover:bg-[var(--portfolio-primary)] hover:text-white transition-colors"
    >
    <Linkedin size={18} />
    </a>
    <a
    href="mailto:enniobernardo96@gmail.com"
    className="p-2 bg-gray-100 rounded-full hover:bg-[var(--portfolio-primary)] hover:text-white transition-colors"
    >
    <Mail size={18} />
    </a>
    <a
    href="http://lattes.cnpq.br/5971007037414033"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-gray-100 rounded-full hover:bg-[var(--portfolio-primary)] hover:text-white transition-colors text-xs font-bold flex items-center justify-center w-[34px] h-[34px]"
    >
    Lattes
    </a>
    </div>
    </div>

    {/* Navigation */}
    <nav className="space-y-2 mb-8">
    {navLinks.map((link) => (
      <button
      key={link.id}
      onClick={() => scrollToSection(link.id)}
      className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
        activeSection === link.id
        ? "bg-[var(--portfolio-primary)] text-white font-medium"
        : "text-[var(--portfolio-text-secondary)] hover:bg-gray-100"
      }`}
      >
      {link.label}
      </button>
    ))}
    </nav>

    {/* Contact Info */}
    <div className="pt-8 border-t border-gray-200 space-y-3">
    <div>
    <p className="text-xs font-semibold text-[var(--portfolio-text-secondary)] mb-1">
    E-MAIL
    </p>
    <p className="text-sm text-[var(--portfolio-text-primary)]">
    enniobernardo96@gmail.com
    </p>
    </div>
    </div>
    </aside>
  );
}
