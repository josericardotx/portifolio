import { Button } from "@/components/ui/button";
import { ChevronDown, BarChart3, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      {/* Decorative icons */}
      <div className="absolute top-1/3 right-[15%] text-primary/20 animate-float" style={{ animationDelay: "0.5s" }}>
        <BarChart3 size={48} />
      </div>
      <div className="absolute bottom-1/3 left-[15%] text-primary/15 animate-float" style={{ animationDelay: "1.5s" }}>
        <TrendingUp size={40} />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border backdrop-blur-sm animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Analista de Dados</span>
          </div>

          {/* Name */}
          <h2 className="text-lg md:text-xl text-muted-foreground font-medium animate-fade-up" style={{ animationDelay: "0.2s" }}>
            José Ricardo Teixeira Santos Junior
          </h2>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Transformando Dados em{" "}
            <span className="text-gradient">Inteligência de Negócio</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Especialista em Power BI & Excel Avançado. Focado em transformar dados brutos em insights estratégicos para suporte à tomada de decisão.
          </p>

          {/* Bio */}
          <p className="text-base text-muted-foreground/80 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
            Experiência na Saint-Gobain e ProEcho, automatizando processos manuais via DAX e otimizando a visualização de indicadores operacionais.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <Button variant="glow" size="lg" onClick={scrollToProjects}>
              Ver Projetos
              <ChevronDown className="ml-1" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:jricardo.teix@gmail.com">
                Entrar em Contato
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-muted-foreground" size={28} />
      </div>
    </section>
  );
};

export default HeroSection;
