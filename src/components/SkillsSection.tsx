import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Database, 
  FileSpreadsheet, 
  Brain, 
  Workflow,
  Sparkles
} from "lucide-react";

const skills = [
  { name: "Power BI", icon: BarChart3 },
  { name: "DAX", icon: Sparkles },
  { name: "Excel Avançado", icon: FileSpreadsheet },
  { name: "Inteligência de Negócios", icon: Brain },
  { name: "ETL", icon: Workflow },
  { name: "SQL", icon: Database },
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 space-y-4">
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Competências
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Habilidades{" "}
            <span className="text-gradient">Técnicas</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ferramentas e tecnologias que utilizo para entregar soluções de análise de dados de alto impacto.
          </p>
        </div>

        {/* Skills grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <Badge 
                  variant="skill" 
                  className="px-5 py-3 text-sm flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                >
                  <Icon className="w-4 h-4" />
                  {skill.name}
                </Badge>
              </div>
            );
          })}
        </div>

        {/* Decorative line */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-border" />
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-border" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
