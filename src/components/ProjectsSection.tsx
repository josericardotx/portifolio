import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Dashboard de Vendas",
    category: "Comercial",
    description: "Análise completa do funil de vendas, performance comercial e tendências de mercado com insights acionáveis.",
    highlight: "Automatização de propostas e análise de mercado",
    powerBiUrl: "https://app.powerbi.com/view?r=eyJrIjoiYjYyZjA5YTctOTc0Ny00NGUwLTljMGMtMmRjYzA4NTdiMDMwIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
    // CORREÇÃO: Adicionado import.meta.env.BASE_URL
    imagePath: `${import.meta.env.BASE_URL}dash-vendas.jpg`,
    icon: "sales" as const,
  },
  {
    title: "Dashboard de SAC / Atendimento",
    category: "Operacional",
    description: "Monitoramento de tickets de atendimento, tempo médio de resposta (SLA) e índices de satisfação do cliente.",
    highlight: "Controle de filas e redução de SLA",
    powerBiUrl: "https://app.powerbi.com/view?r=eyJrIjoiNDVhYTU3ZGYtZjdhNC00NTM4LWE0ZjAtODFmYjVhNzFiZGJmIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
    // CORREÇÃO: Adicionado import.meta.env.BASE_URL
    imagePath: `${import.meta.env.BASE_URL}dash-sac.jpg`,
    icon: "management" as const,
  },
  {
    title: "Dashboard Financeiro",
    category: "Finanças",
    description: "Visão consolidada de receitas, despesas, metas financeiras e indicadores-chave de performance.",
    highlight: "Monitoramento de metas e KPIs financeiros",
    powerBiUrl: "https://app.powerbi.com/view?r=eyJrIjoiZjM5NTczODEtMjRlMC00OTk2LWJiYTEtNTQ0OTNjZDEzMWMyIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
    // CORREÇÃO: Adicionado import.meta.env.BASE_URL
    imagePath: `${import.meta.env.BASE_URL}dash-financeiro.jpg`,
    icon: "finance" as const,
  },
  {
    title: "Dashboard de Gestão",
    category: "Performance",
    description: "Análise estratégica com visão interna vs. externa, métricas de performance e tomada de decisão.",
    highlight: "Visão interna vs. externa e performance operacional",
    powerBiUrl: "https://app.powerbi.com/view?r=eyJrIjoiYzBjZTQ5YTgtMjIyNS00OTcyLThlYzEtYmMwNzc4ZWQ1MDExIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
    // CORREÇÃO: Adicionado import.meta.env.BASE_URL
    imagePath: `${import.meta.env.BASE_URL}dash-gestao.jpg`,
    icon: "management" as const,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Projetos em <span className="text-gradient">Destaque</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Dashboards interativos desenvolvidos para transformar dados complexos em visualizações claras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={0.1 * (index + 1)}
              size="normal"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;