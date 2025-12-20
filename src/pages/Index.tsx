import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection"; // Importando a nova seção
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>José Ricardo | Analista de Dados - Power BI & Excel Avançado</title>
        <meta 
          name="description" 
          content="Portfólio de José Ricardo Teixeira Santos Junior - Analista de Dados especializado em Power BI, DAX e Excel Avançado. Transformando dados em inteligência de negócio." 
        />
        <meta name="keywords" content="Analista de Dados, Power BI, DAX, Excel Avançado, Business Intelligence, ETL, Dashboard, Data Science, Python" />
        <link rel="canonical" href="https://joserictardo.dev" />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* 1. Capa com Foto e Chamada Principal */}
        <HeroSection />
        
        {/* 2. História (Storytelling) - Conecta a Hero aos Projetos */}
        <AboutSection />
        
        {/* 3. Dashboards e Cases Reais */}
        <ProjectsSection />
        
        {/* 4. Lista Técnica de Competências */}
        <SkillsSection />
        
        {/* 5. Rodapé e Contatos */}
        <Footer />
      </main>
    </>
  );
};

export default Index;