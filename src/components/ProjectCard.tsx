import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, BarChart2, Activity, DollarSign, Users, PlayCircle } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  highlight: string;
  powerBiUrl: string;
  imagePath: string; // Nova propriedade para a foto
  icon: "sales" | "health" | "finance" | "management";
  delay?: number;
  size?: "normal" | "large";
}

const iconMap = {
  sales: BarChart2,
  health: Activity,
  finance: DollarSign,
  management: Users,
};

const ProjectCard = ({ 
  title, 
  category, 
  description, 
  highlight, 
  powerBiUrl,
  imagePath,
  icon,
  delay = 0,
  size = "normal"
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = iconMap[icon];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div 
          className={`group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 animate-fade-up cursor-pointer flex flex-col h-full ${
            size === "large" ? "md:col-span-2 md:row-span-2" : ""
          }`}
          style={{ animationDelay: `${delay}s` }}
        >
          {/* ÁREA DA IMAGEM (CAPA) */}
          <div className="relative w-full h-48 md:h-56 overflow-hidden bg-muted">
            {/* Imagem do Dashboard */}
            <img 
              src={imagePath} 
              alt={title} 
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay Escuro no Hover com Botão Play */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-background/20 backdrop-blur-md border border-white/20 p-3 rounded-full">
                 <PlayCircle className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Badge da Categoria */}
            <div className="absolute top-3 left-3 bg-background/90 backdrop-blur border border-border px-3 py-1 rounded-full flex items-center gap-2 text-xs font-semibold shadow-sm">
               <Icon className="w-3 h-3 text-primary" />
               {category}
            </div>
          </div>
          
          {/* CONTEÚDO DO CARD */}
          <div className="p-5 flex flex-col flex-1">
            <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>

            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {description}
            </p>

            {/* Destaque (Highlight) */}
            <div className="mt-auto pt-4 border-t border-border/50">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">
                Impacto no Negócio
              </span>
              <p className="text-xs text-foreground font-medium">
                {highlight}
              </p>
            </div>
          </div>
        </div>
      </DialogTrigger>

      {/* MODAL (JANELA QUE ABRE) */}
      <DialogContent className="max-w-[98vw] w-full h-[95vh] p-0 gap-0 bg-background border-border flex flex-col overflow-hidden">
        <DialogHeader className="px-6 py-3 border-b border-border shrink-0 flex flex-row items-center justify-between bg-muted/30">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-primary/10 rounded-lg">
                <Icon className="w-5 h-5 text-primary" />
             </div>
             <div>
                <DialogTitle className="text-lg font-semibold leading-none">
                  {title}
                </DialogTitle>
             </div>
          </div>
        </DialogHeader>

        <div className="flex-1 w-full h-full bg-muted/20 relative">
            <iframe
              src={powerBiUrl}
              className="absolute inset-0 w-full h-full border-none"
              allowFullScreen={true}
              title={title}
            />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;