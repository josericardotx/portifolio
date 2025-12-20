import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Github, FileSpreadsheet } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-secondary/10 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* LADO ESQUERDO: Texto */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Disponível para novos projetos
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              José Ricardo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Analista de Dados
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
              Transformando processos administrativos e comerciais em inteligência de dados através de Python, Excel e Automação.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
              <Button size="lg" className="h-12 px-8 text-lg gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                Ver Projetos
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/jos%C3%A9-ricardo-teixeira-santos-junior-256407264/" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors border border-border">
                  <Linkedin className="w-5 h-5" />
                </a>
                {/* LINK DO GITHUB CORRIGIDO */}
                <a href="https://github.com/josericardotx" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors border border-border">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: Foto */}
          <div className="flex-1 relative flex justify-center md:justify-end animate-fade-in">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Moldura Brilhante */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary via-blue-400 to-purple-500 rounded-full blur-md opacity-70"></div>
              
              {/* Foto Container */}
              <div className="relative w-full h-full rounded-full border-[6px] border-background overflow-hidden shadow-2xl">
                <img 
                  src="/profile.jpg" 
                  alt="José Ricardo" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Badge 1: EXCEL & BI (Corrigido) */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border p-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-green-500/20 p-2 rounded-lg">
                  {/* Ícone Nativo (Nunca quebra) */}
                  <FileSpreadsheet className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold">Avançado</p>
                  <p className="text-sm font-bold">Excel & Power BI</p>
                </div>
              </div>

              {/* Badge 2: PYTHON (Mantido) */}
              <div className="absolute top-10 -right-8 bg-card border border-border p-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="bg-yellow-500/20 p-2 rounded-lg">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-6 h-6" alt="Python" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold">Estudando</p>
                  <p className="text-sm font-bold">Data Science</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;