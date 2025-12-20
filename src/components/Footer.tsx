import { Button } from "@/components/ui/button";
import { Linkedin, Mail, BarChart3 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border relative">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-semibold">José Ricardo</span>
          </div>

          {/* Tagline Principal */}
          <p className="text-muted-foreground max-w-md">
            Pronto para otimizar sua operação? Vamos conversar sobre como os dados podem alavancar seus resultados.
          </p>

          {/* Social buttons */}
          <div className="flex items-center gap-4">
            <Button variant="outline" size="lg" asChild className="gap-2 hover:border-primary/50 transition-colors">
              <a 
                href="https://www.linkedin.com/in/jos%C3%A9-ricardo-teixeira-santos-junior-256407264/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-blue-600" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="gap-2 hover:border-primary/50 transition-colors">
              <a href="mailto:josericardojuniorte@gmail.com">
                <Mail className="w-5 h-5 text-red-500" />
                E-mail
              </a>
            </Button>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border" />

          {/* Copyright & Posicionamento Estratégico */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} José Ricardo Teixeira Santos Junior</p>
            
            {/* AQUI ESTÁ A MUDANÇA ESTRATÉGICA */}
            <p className="flex items-center gap-1">
              Focado em <span className="text-primary font-semibold">Performance e Inteligência de Negócio</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;