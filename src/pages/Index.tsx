import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
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
        <meta name="keywords" content="Analista de Dados, Power BI, DAX, Excel Avançado, Business Intelligence, ETL, Dashboard" />
        <link rel="canonical" href="https://joserictardo.dev" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
