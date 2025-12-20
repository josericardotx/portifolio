import { Briefcase, Code2, GraduationCap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 bg-secondary/30 border-y border-border/50">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Minha Jornada: <span className="text-primary">Do Negócio aos Dados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Não sou apenas um analista; sou um resolvedor de problemas que usa dados para alavancar resultados reais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: Profissional */}
          <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-colors">
            <CardContent className="pt-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">O Profissional</h3>
              <p className="text-muted-foreground leading-relaxed">
                Atuo na <strong>PAM Saint-Gobain</strong> como Analista Administrativo de Vendas Jr. Meu foco vai além do suporte: utilizo minha vivência comercial para identificar gargalos e otimizar fluxos de trabalho que impactam diretamente a receita.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: Tecnologia */}
          <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-colors">
            <CardContent className="pt-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">A Tecnologia</h3>
              <p className="text-muted-foreground leading-relaxed">
                Minha paixão por eficiência me levou a automatizar tarefas repetitivas usando <strong>SAP Scripting</strong> e <strong>Excel Avançado</strong>. Percebi que os dados são o maior ativo da empresa e decidi transformá-los em estratégia.
              </p>
            </CardContent>
          </Card>

          {/* Card 3: Formação */}
          <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-colors">
            <CardContent className="pt-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">A Formação</h3>
              <p className="text-muted-foreground leading-relaxed">
                Estou em transição de carreira cursando <strong>Ciência de Dados na EBAC</strong>. Aprimorando habilidades em Python, Estatística e Machine Learning para construir soluções preditivas robustas.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bloco de Objetivo */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 rounded-2xl border border-primary/20 flex flex-col md:flex-row items-center gap-6">
          <div className="p-4 bg-primary text-primary-foreground rounded-full shrink-0">
            <Target className="w-8 h-8" />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">Meu Objetivo</h3>
            <p className="text-muted-foreground text-lg">
              Atuar 100% como <strong>Analista ou Cientista de Dados</strong>, unindo meu background de negócios com a capacidade técnica de transformar dados brutos em decisões inteligentes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;