import { Briefcase, Code2, GraduationCap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 bg-secondary/30 border-y border-border/50">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Minha Jornada: <span className="text-primary">Estratégia & Dados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Unindo a vivência administrativa com a capacidade técnica de desenvolver soluções de dados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: O Profissional (Transparência: Cargo Real + Iniciativa) */}
          <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-colors h-full">
            <CardContent className="pt-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">O Profissional</h3>
              <p className="text-muted-foreground leading-relaxed">
                Atuo oficialmente na <strong>PAM Saint-Gobain</strong> como <strong>Analista Administrativo de Vendas Jr</strong>. Embora minha função seja focada em processos comerciais e suporte à vendas, meu diferencial é aplicar, por iniciativa própria, técnicas de automação para otimizar rotinas administrativas e eliminar tarefas manuais repetitivas.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: A Tecnologia (Foco Técnico: O que você entrega nos projetos) */}
          <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-colors h-full">
            <CardContent className="pt-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">A Tecnologia</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nos meus projetos de dados, foco fortemente na "cozinha" da informação: <strong>ETL e Modelagem de Dados</strong>. Acredito que um bom dashboard nasce de uma base bem estruturada. No <strong>Power BI</strong>, priorizo indicadores de mercado (KPIs) que realmente facilitam a gestão e trazem clareza para o negócio.
              </p>
            </CardContent>
          </Card>

          {/* Card 3: A Formação (Administração + Ciência de Dados) */}
          <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-colors h-full">
            <CardContent className="pt-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">A Formação</h3>
              <p className="text-muted-foreground leading-relaxed">
                Finalizando <strong>Administração</strong> e cursando <strong>Ciência de Dados na EBAC</strong>. Busco migrar 100% para a área de dados unindo essa base acadêmica de negócios com estudos avançados em Python e estatística para gerar insights estratégicos.
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
              Realizar a transição de carreira para atuar como <strong>Analista de Dados / BI</strong>, aplicando minha experiência de negócio na construção de dashboards e modelos de dados eficientes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;