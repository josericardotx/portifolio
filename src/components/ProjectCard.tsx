import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, BarChart2, Activity, DollarSign, Users } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  highlight: string;
  powerBiUrl: string;
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

const categoryColors = {
  sales: "from-blue-500/20 to-cyan-500/10",
  health: "from-emerald-500/20 to-teal-500/10",
  finance: "from-amber-500/20 to-orange-500/10",
  management: "from-violet-500/20 to-purple-500/10",
};

const ProjectCard = ({ 
  title, 
  category, 
  description, 
  highlight, 
  powerBiUrl, 
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
          className={`group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 animate-fade-up cursor-pointer flex flex-col text-left h-full ${
            size === "large" ? "md:col-span-2 md:row-span-2" : ""
          }`}
          style={{ animationDelay: `${delay}s` }}
        >
          {/* Gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[icon]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          
          {/* Content */}
          <div className={`relative z-10 p-6 ${size === "large" ? "md:p-8" : ""} h-full flex flex-col`}>
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Icon className="w-6 h-6 text-primary" />
            </div>

            {/* Category */}
            <span className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
              {category}
            </span>

            {/* Title */}
            <h3 className={`font-semibold text-foreground mb-3 ${size === "large" ? "text-2xl" : "text-xl"}`}>
              {title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-4 flex-grow">
              {description}
            </p>

            {/* Highlight */}
            <div className="mb-6 p-3 rounded-lg bg-secondary/50 border border-border">
              <span className="text-xs uppercase tracking-wider text-primary font-medium">Destaque</span>
              <p className="text-sm text-foreground mt-1">{highlight}</p>
            </div>

            {/* Fake Button (Visual only, Trigger is the whole card) */}
            <div className="w-full mt-auto">
                <Button variant="secondary" className="w-full group/btn bg-background/50 hover:bg-primary hover:text-white transition-all duration-300 border border-primary/20">
                  Ver Dashboard
                  <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-0.5" />
                </Button>
            </div>
          </div>

          {/* Hover border glow effect */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
            background: "linear-gradient(145deg, transparent 40%, hsl(var(--primary) / 0.1) 100%)"
          }} />
        </div>
      </DialogTrigger>

      {/* MODAL CONFIGURADO PARA TELA CHEIA (CINEMA MODE) */}
      <DialogContent className="max-w-[98vw] w-full h-[95vh] p-0 gap-0 bg-background border-border flex flex-col overflow-hidden">
        
        {/* Header do Modal */}
        <DialogHeader className="px-6 py-4 border-b border-border shrink-0 flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-primary/10 rounded-lg">
                <Icon className="w-5 h-5 text-primary" />
             </div>
             <div>
                <DialogTitle className="text-lg font-semibold leading-none">
                  {title}
                </DialogTitle>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{category}</p>
             </div>
          </div>
        </DialogHeader>

        {/* Área do Iframe (Ocupa 100% do espaço restante) */}
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