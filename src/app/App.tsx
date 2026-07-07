import { useState, useEffect } from "react";
import { Download, Sparkles, Award, Target, Code2, TrendingUp } from "lucide-react";
import { Sidebar } from "./components/Sidebar";
import { MobileNav } from "./components/MobileNav";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectPreviewModal } from "./components/ProjectPreviewModal";
import { SkillBadge } from "./components/SkillBadge";
import { TimelineEntry } from "./components/TimelineEntry";
import { BackToTop } from "./components/BackToTop";
import lyapyBg from "../imports/download.png";
import b3Bg from "../imports/Captura_de_Tela_2026-05-08_a_s_11.08.10.png";
import bifin from "../imports/Captura de tela de 2026-07-07 01-32-06.png"

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [previewProject, setPreviewProject] = useState({
    title: "",
    description: "",
    liveUrl: "",
    githubUrl: "",
    stack: [] as string[],
    gradient: "",
  });

  const openPreviewModal = (project: {
    title: string;
    description: string;
    liveUrl: string;
    githubUrl: string;
    stack: string[];
    gradient: string;
  }) => {
    setPreviewProject(project);
    setPreviewModalOpen(true);
  };

  const closePreviewModal = () => {
    setPreviewModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "skills", "experience", "about", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--portfolio-bg)]">
      <Sidebar activeSection={activeSection} />
      <MobileNav activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="lg:ml-80 pt-[57px] lg:pt-0">
        {/* HERO SECTION */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />

          <div className="max-w-4xl w-full text-center relative z-10">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-blue-100 text-[var(--portfolio-primary)] text-sm font-semibold rounded-full">
                👋 Bem-vindo ao meu portfólio
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[var(--portfolio-text-primary)] mb-6 leading-tight">
              Criando soluções com <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">Dados</span> e <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">Inteligência Artificial</span>
            </h1>

            <p className="text-xl text-[var(--portfolio-text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
              Estudante de Data Science especializado em construir pipelines ETL e modelos preditivos que geram impacto real nos negócios.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                <Sparkles size={20} />
                Ver meus projetos
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-[var(--portfolio-text-primary)] rounded-xl font-semibold hover:border-[var(--portfolio-primary)] hover:bg-blue-50 transition-all flex items-center gap-2">
                <Download size={20} />
                Baixar CV
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--portfolio-primary)] mb-1">3+</div>
                <div className="text-sm text-[var(--portfolio-text-secondary)]">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--portfolio-primary)] mb-1">5+</div>
                <div className="text-sm text-[var(--portfolio-text-secondary)]">Tecnologias</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--portfolio-primary)] mb-1">2+</div>
                <div className="text-sm text-[var(--portfolio-text-secondary)]">Anos exp.</div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Code2 size={24} className="text-[var(--portfolio-primary)]" />
                </div>
                <h2 className="text-4xl font-bold text-[var(--portfolio-text-primary)]">
                  Projetos em Destaque
                </h2>
              </div>
              <p className="text-lg text-[var(--portfolio-text-secondary)]">
                Soluções de dados que transformam complexidade em clareza
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">


            <ProjectCard
            title="Preditor de Preços Airbnb RJ"
            description="Aplicação ML end-to-end que prevê preços de aluguéis de curta temporada usando features geográficas e sazonais."
            stack={["Python", "Scikit-learn", "Extra Trees", "Streamlit", "Pandas"]}
            status="live"
            liveUrl="https://projeto-previsao-airbnb.streamlit.app"
            githubUrl="https://github.com/EnniodosSantos/Projeto-Previsao-Airbnb"
            gradient="from-teal-500 via-emerald-600 to-green-600"
            icon="chart"
            backgroundImage="https://images.unsplash.com/photo-1655151485863-5bd031271d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxSaW8lMjBkZSUyMEphbmVpcm8lMjBjaXR5JTIwdmlldyUyMENyaXN0byUyMFJlZGVudG9yfGVufDF8fHx8MTc3ODI0OTQyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
            openInModal={true}
            onOpenModal={() =>
              openPreviewModal({
                title: "Preditor de Preços Airbnb RJ",
                description: "Aplicação ML end-to-end que prevê preços de aluguéis de curta temporada usando features geográficas e sazonais.",
                liveUrl: "https://projeto-previsao-airbnb.streamlit.app",
                githubUrl: "https://github.com/EnniodosSantos/Projeto-Previsao-Airbnb",
                stack: ["Python", "Scikit-learn", "Extra Trees", "Streamlit", "Pandas"],
                gradient: "from-teal-500 via-emerald-600 to-green-600",
              })
            }
            />


            <ProjectCard
            title="Dashboard Financeiro Empresarial"
            description="Dashboard interativo de KPIs financeiros construído com Streamlit e Plotly.
                Desenvolvido como projeto de portfólio em Business Intelligence e Análise de Dados."
            stack={["Python", "Numpy", "Plotly", "Streamlit", "Pandas"]}
            status="live"
            liveUrl="https://projeto-bi-financeiro.streamlit.app/"
            githubUrl="https://github.com/EnniodosSantos/Projeto-BI-Financeiro"
            gradient="from-teal-500 via-blue-400 to-blue-600"
            icon="chart"
            backgroundImage={bifin}
            openInModal={true}
            onOpenModal={() =>
              openPreviewModal({
                title: "Dashboard Financeiro Empresarial",
                description: "Dashboard interativo de KPIs financeiros construído com Streamlit e Plotly. Desenvolvido como projeto de portfólio em Business Intelligence e Análise de Dados.",
                liveUrl: "https://projeto-bi-financeiro.streamlit.app/",
                githubUrl: "https://github.com/EnniodosSantos/Projeto-BI-Financeiro",
                stack: ["Python", "Numpy", "Plotly", "Streamlit", "Pandas"],
                gradient: "from-teal-500 via-blue-400 to-blue-600",
                  })
                }
              />

              <ProjectCard
              title="Mercado Financeiro B3 — Pipeline ETL com PostgreSQL"
              description="Pipeline ETL completo com modelagem relacional de dados para análise de negócios."
              stack={["PostgreSQL", "Python", "dbt"]}
              status="live"
              liveUrl="https://projeto-b3-ennio.streamlit.app"
              githubUrl="https://github.com/EnniodosSantos/projeto-b3"
              gradient="from-gray-400 via-gray-500 to-gray-600"
              icon="database"
              backgroundImage={b3Bg}
              openInModal={true}
              onOpenModal={() =>
                openPreviewModal({
                  title: "Mercado Financeiro B3 — Pipeline ETL com PostgreSQL",
                  description: "Pipeline ETL completo com modelagem relacional de dados para análise de negócios.",
                  liveUrl: "https://projeto-b3-ennio.streamlit.app",
                  githubUrl: "https://github.com/EnniodosSantos/projeto-b3",
                  stack: ["PostgreSQL", "Python", "dbt"],
                  gradient: "from-gray-400 via-gray-500 to-gray-600",
                })
              }
            />

               {/* <ProjectCard
              title="Lyapy — Biblioteca de Simulação de Caos"
              description="Biblioteca Python open-source para geração e análise de séries temporais caóticas com precisão arbitrária."
              stack={["Python", "NumPy", "Matplotlib", "OOP"]}
              status="live"
              liveUrl="https://enniodossantos.github.io/lyapy-documentation/"
              gradient="from-blue-600 via-blue-400 to-gray-400"
              icon="brain"
              backgroundImage={lyapyBg}
              openInModal={true}
              onOpenModal={() =>
                openPreviewModal({
                  title: "Lyapy — Biblioteca de Simulação de Caos",
                  description: "Biblioteca Python open-source para geração e análise de séries temporais caóticas com precisão arbitrária.",
                  liveUrl: "https://enniodossantos.github.io/lyapy-documentation/",
                  stack: ["Python", "NumPy", "Matplotlib", "OOP"],
                  gradient: "from-blue-600 via-blue-400 to-gray-400",
                })
              }
              />
              */}

            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target size={24} className="text-[var(--portfolio-primary)]" />
                </div>
                <h2 className="text-4xl font-bold text-[var(--portfolio-text-primary)]">
                  Stack Técnico
                </h2>
              </div>
              <p className="text-lg text-[var(--portfolio-text-secondary)]">
                Ferramentas e tecnologias que domino para entregar resultados
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-[var(--portfolio-text-primary)] mb-4">
                  Data Science & ML
                </h3>
                <SkillBadge
                  category="data-science"
                  skills={[
                    "Python",
                    "SQL",
                    "R",
                    "Machine Learning",
                    "Modelagem Estatística",
                    "EDA",
                  ]}
                />
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <Award size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-[var(--portfolio-text-primary)] mb-4">
                  BI & Visualização
                </h3>
                <SkillBadge
                  category="bi"
                  skills={[
                    "Power BI",
                    "Excel",
                    "Dashboards",
                    "Definição de KPIs",
                    "Data Storytelling",
                  ]}
                />
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center mb-4">
                  <Code2 size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-[var(--portfolio-text-primary)] mb-4">
                  Engenharia & Infra
                </h3>
                <SkillBadge
                  category="engineering"
                  skills={[
                    "Pipelines ETL",
                    "PostgreSQL (cloud)",
                    "Streamlit Cloud",
                    "Git",
                    "TOTVS ERP",
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Award size={24} className="text-[var(--portfolio-primary)]" />
                </div>
                <h2 className="text-4xl font-bold text-[var(--portfolio-text-primary)]">
                  Experiência & Formação
                </h2>
              </div>
              <p className="text-lg text-[var(--portfolio-text-secondary)]">
                Minha trajetória profissional e acadêmica
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-[var(--portfolio-text-primary)] mb-6">
                  💼 Experiência Profissional
                </h3>
                <TimelineEntry
                  role="Analista de Dados"
                  company="Setor de Logística e Energia"
                  period="[datas não especificadas]"
                  bullets={[
                    "Construí relatórios de desempenho e dashboards de monitoramento usando SQL e Power BI",
                    "Defini e acompanhei KPIs operacionais para logística e infraestrutura",
                    "Automatizei rotinas de relatórios com scripts Python",
                    "Trabalhei com TOTVS ERP para gestão de estoque e expedição",
                  ]}
                />
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100">
                  <h3 className="text-xl font-bold text-[var(--portfolio-text-primary)] mb-6">
                    🎓 Formação Acadêmica
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-16 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">UFMS</span>
                      </div>
                      <div>
                        <p className="font-bold text-[var(--portfolio-text-primary)]">
                          Tecnologia em Ciência de Dados
                        </p>
                        <p className="text-sm text-[var(--portfolio-text-secondary)]">
                          UFMS · Em andamento
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-16 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">ESALQ</span>
                      </div>
                      <div>
                        <p className="font-bold text-[var(--portfolio-text-primary)]">
                          Análise de Dados com Python
                        </p>
                        <p className="text-sm text-[var(--portfolio-text-secondary)]">
                          USP ESALQ · Concluído
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-100">
                  <h3 className="text-xl font-bold text-[var(--portfolio-text-primary)] mb-4">
                    🌍 Idiomas
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-[var(--portfolio-text-primary)]">Português</span>
                      <span className="text-sm text-[var(--portfolio-text-secondary)]">Nativo</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-[var(--portfolio-text-primary)]">Inglês</span>
                      <span className="text-sm text-[var(--portfolio-text-secondary)]">Intermediário/Avançado</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-[var(--portfolio-text-primary)]">Francês</span>
                      <span className="text-sm text-[var(--portfolio-text-secondary)]">Iniciante</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 px-6 lg:px-12 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Sparkles size={24} className="text-[var(--portfolio-primary)]" />
                </div>
                <h2 className="text-4xl font-bold text-[var(--portfolio-text-primary)]">
                  Sobre Mim
                </h2>
              </div>
              <p className="text-lg text-[var(--portfolio-text-secondary)]">
                Conheça um pouco mais sobre minha jornada
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-[var(--portfolio-text-secondary)] leading-relaxed mb-6">
                  Sou estudante de Ciência de Dados na UFMS (Universidade Federal do Mato Grosso do Sul), concluindo minha graduação com foco em transformar dados em insights acionáveis. Minha experiência profissional abrange os setores de logística e energia, onde construí dashboards, defini KPIs e automatizei fluxos de relatórios.
                </p>
                <p className="text-lg text-[var(--portfolio-text-secondary)] leading-relaxed mb-6">
                  Trabalho principalmente com Python, SQL e Power BI, construindo soluções end-to-end desde a extração de dados até modelos de machine learning em produção. Sou apaixonado por aplicar rigor analítico para resolver problemas operacionais do mundo real.
                </p>
                <p className="text-lg text-[var(--portfolio-text-secondary)] leading-relaxed">
                  Quando não estou analisando dados, estou explorando teoria do caos através da minha biblioteca Python open-source, ou aprendendo novas técnicas de modelagem estatística e machine learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-[var(--portfolio-text-primary)] mb-4">
                Vamos Trabalhar Juntos?
              </h2>
              <p className="text-lg text-[var(--portfolio-text-secondary)]">
                Estou sempre aberto a novos projetos e oportunidades
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-600 to-indigo-300 rounded-3xl p-12 text-white">
              <p className="text-xl mb-8">
                Entre em contato comigo através das redes sociais na barra lateral ou envie um e-mail.
              </p>
              <button className="px-8 py-4 bg-white text-[var(--portfolio-primary)] rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all">
                Entrar em Contato
              </button>
            </div>
          </div>
        </section>
      </main>

      <ProjectPreviewModal
        isOpen={previewModalOpen}
        onClose={closePreviewModal}
        title={previewProject.title}
        description={previewProject.description}
        liveUrl={previewProject.liveUrl}
        githubUrl={previewProject.githubUrl}
        stack={previewProject.stack}
        gradient={previewProject.gradient}
      />

      <BackToTop />
    </div>
  );
}
